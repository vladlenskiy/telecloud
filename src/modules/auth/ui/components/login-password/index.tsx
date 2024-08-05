import React, { useCallback, useState } from 'react';
import * as S from '@src/modules/auth/ui/screens/auth/styles';
import { Portal } from '@gorhom/portal';
import UDButton from '@src/modules/ud-ui/components/ud-button';
import { useDispatch, useSelector } from 'react-redux';
import { login2FA } from '@src/modules/auth/store/actions';
import { isLoginLoadingSelector } from '@src/modules/auth/store/selectors';
import { ActivityIndicator, Text } from 'react-native';
import { AppDispatch } from '@src/store/store';

type Props = {
  activeSlide: number;
  bottomSheetRef: any;
};

export default function LoginPassword(props: Props) {
  const { activeSlide, bottomSheetRef } = props;
  const dispatch = useDispatch<AppDispatch>();

  const isLoginLoading = useSelector(isLoginLoadingSelector);
  const [password, setPassword] = useState('');

  const onChangeText = (text: string) => {
    setPassword(text);
  };

  const onLogin = useCallback(() => {
    dispatch(login2FA({ password }));
  }, [password]);

  if (isLoginLoading) {
    return (
      <S.ModalContainer>
        <ActivityIndicator size={'large'} />
        <Text style={{ color: 'white', fontSize: 20, alignSelf: 'center' }}>
          Получаю информацию о профиле, это может занять время
        </Text>
      </S.ModalContainer>
    );
  }

  return (
    <S.ModalContainer>
      {activeSlide === 2 && (
        <>
          <S.Form
            value={password}
            editable={!isLoginLoading}
            onChangeText={onChangeText}
            autoFocus={true}
            onEndEditing={() =>
              bottomSheetRef?.current.snapToPosition(200, { duration: 500 })
            }
            placeholder={'Пароль'}
            placeholderTextColor={'darkgrey'}
            secureTextEntry={true}
            style={{ paddingLeft: 10 }}
          />

          <Portal>
            <S.ButtonContainer
              useNativeDriver={true}
              delay={500}
              duration={500}
              animation={'fadeInUp'}>
              <UDButton onPress={onLogin} label={'Войти'} />
            </S.ButtonContainer>
          </Portal>
        </>
      )}
    </S.ModalContainer>
  );
}
