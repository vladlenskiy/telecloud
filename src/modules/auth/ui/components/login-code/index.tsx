import React, { useCallback } from 'react';
import * as S from '@src/modules/auth/ui/screens/auth/styles';
import OtpInput from 'react-native-animated-otp-input';
import { useDispatch, useSelector } from 'react-redux';
import { login } from '@src/modules/auth/store/actions';
import { isLoginLoadingSelector } from '@src/modules/auth/store/selectors';
import { AppDispatch } from '@src/store/store';

type Props = {
  onSlideContent: (index: number, position: number) => void;
  activeSlide: number;
};

export default function LoginCode(props: Props) {
  const { onSlideContent, activeSlide } = props;
  const dispatch = useDispatch<AppDispatch>();
  const isLoginLoading = useSelector(isLoginLoadingSelector);

  const onLoginPressed = useCallback((code: number) => {
    dispatch(login({ phoneCode: String(code), onSlideContent }));
  }, []);

  // if (isLoginLoading) {
  //   return (
  //     <S.LoginCodeContainer>
  //       <ActivityIndicator size={'large'} />
  //       <Text style={{ color: 'white', fontSize: 20, alignSelf: 'center' }}>
  //         Получаю информацию о профиле, это может занять время
  //       </Text>
  //     </S.LoginCodeContainer>
  //   );
  // }
  return (
    <S.LoginCodeContainer>
      {activeSlide === 1 && (
        <OtpInput
          otpCount={5}
          autoFocus={true}
          editable={!isLoginLoading}
          onCodeFilled={code => onLoginPressed(code)}
        />
      )}
    </S.LoginCodeContainer>
  );
}
