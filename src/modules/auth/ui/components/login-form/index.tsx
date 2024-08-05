import React, {
  useCallback,
  useEffect,
  useMemo,
  useRef,
  useState,
} from 'react';
import * as S from '@src/modules/auth/ui/screens/auth/styles';
import UDButton from '@src/modules/ud-ui/components/ud-button';
import { sendCode } from '@src/modules/auth/store/actions';
import { useDispatch } from 'react-redux';
import { CountryPicker } from 'react-native-country-picker-modal/lib/CountryPicker';
import {
  Country,
  CountryCode,
  getCallingCode,
} from 'react-native-country-picker-modal';
import MtProtoResource from '@src/modules/core/infrastructure/MtProtoResource';
import { formatPhoneNumber } from '@src/modules/auth/domain/helpers/validatePhoneNumber';
import * as Animatable from 'react-native-animatable';
import { isValidNumber } from 'libphonenumber-js';
import { Portal } from '@gorhom/portal';
import { Keyboard } from 'react-native';
import { AppDispatch } from '@src/store/store';
const containerButtonStyle = {
  bottom: 6,
  paddingLeft: 8,
  position: 'absolute',
} as any;

type Props = {
  onSlideContent: (index: number, position: number) => void;
  bottomSheetRef: any;
  countries: Country[];
  activeSlide: number;
};

export default function LoginForm(props: Props) {
  const { onSlideContent, bottomSheetRef, countries, activeSlide } = props;
  const dispatch = useDispatch<AppDispatch>();

  const animationBtnRef = useRef(null);

  const [phone, setPhone] = useState<string>('');
  const [countryCode, setCountryCode] = useState<CountryCode | null>(null);

  const [isValid, setIsValid] = useState<boolean>(false);

  const onSendCode = useCallback(() => {
    const formatedPhone = phone.replace(/\s/g, '');
    dispatch(sendCode(formatedPhone));
    onSlideContent(1, 160);
  }, [phone]);

  const onSelectCountry = useCallback((country: Country) => {
    if (country && country.cca2 && country.callingCode.length > 0) {
      setCountryCode(country.cca2);
      getCallingCode(country.cca2).then(code => setPhone(`+${code}`));
    }
  }, []);

  useEffect(() => {
    MtProtoResource.call('help.getNearestDc')
      .then((result: any) => {
        setCountryCode(result.country);
        getCallingCode(result.country).then(code => setPhone(`+${code}`));
      })
      .catch(() => {
        setCountryCode('RU');
        setPhone(`+7`);
      });
  }, []);

  useEffect(() => {
    if (isValid) {
      Keyboard.dismiss();
      bottomSheetRef?.current.snapToPosition(200, { duration: 500 });
    }
  }, [isValid]);

  const findCountryCode = useCallback(
    (text: string) => {
      const phoneCode = text.split(' ')[0].split('+')[1];
      if (phoneCode && phoneCode.length >= 1) {
        if (phoneCode === '7') {
          setCountryCode('RU');
        } else {
          const country = countries.find(c => {
            return c.callingCode.find(code => {
              return phoneCode === code;
            });
          });
          if (country) {
            setCountryCode(country?.cca2);
          }
        }
      }
    },
    [countries],
  );

  const onChangeText = useCallback((text: string) => {
    if (text !== '') {
      const phone = formatPhoneNumber(text);
      findCountryCode(phone);
      setPhone(phone);
      if (isValidNumber(phone)) {
        setIsValid(true);
      }
    }
  }, []);

  const resolveCountryPicker = useMemo(() => {
    if (countryCode) {
      return (
        <CountryPicker
          countryCode={countryCode}
          onSelect={onSelectCountry}
          withFilter
          withAlphaFilter
          withCallingCode
          filterProps={{
            placeholder: 'Введите название страны',
          }}
          containerButtonStyle={containerButtonStyle}
        />
      );
    } else {
      return <S.Loader />;
    }
  }, [countryCode]);

  return (
    <>
      <Animatable.View style={{ flex: 1 }}>
        <S.ModalContainer>
          {activeSlide === 0 && (
            <>
              <S.Form
                value={phone}
                keyboardType={'numeric'}
                onChangeText={onChangeText}
                autoFocus={true}
              />
              {resolveCountryPicker}
            </>
          )}
        </S.ModalContainer>
      </Animatable.View>
      {isValid && activeSlide === 0 && (
        <Portal>
          <S.ButtonContainer
            ref={animationBtnRef}
            useNativeDriver={true}
            delay={500}
            duration={500}
            animation={'fadeInUp'}>
            <UDButton onPress={onSendCode} label={'Отправить код'} />
          </S.ButtonContainer>
        </Portal>
      )}
    </>
  );
}
