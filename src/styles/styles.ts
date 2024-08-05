import styled, { css } from '@emotion/native';
import TextInputMask from 'react-native-text-input-mask';
import { H1 } from './typography';

export const Container = styled.View`
  flex: 1;
  background-color: #222;
`;

export const InformationContainer = styled.ScrollView`
  flex: 1;
  padding: 5% 8% 0 8%;
`;

export const TitleContainer = styled.View`
  margin-top: 18%;
`;

export const H1Title = styled(H1)`
  text-align: center;
  margin-top: 20px;
`;

const inputStyles = css`
  height: 48px;
  width: 88%;
  background-color: white;
  border-radius: 8px;
  padding-left: 4%;
  padding-top: 0;
  padding-bottom: 0;
  font-size: 16px;
`;

export type InputProps = {
  isFocused?: boolean;
  isError?: boolean;
};

export const TextInput = styled.TextInput<InputProps>`
  ${inputStyles};
  font-family: ${(props: any) => props.theme.fonts.regular};
`;
export const MaskedTextInput = styled(TextInputMask)<InputProps>`
  ${inputStyles};
  font-family: ${(props: any) => props.theme.fonts.regular};
`;
