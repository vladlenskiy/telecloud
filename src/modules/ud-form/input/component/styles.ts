import styled, { css } from '@emotion/native';
import { TextInput, MaskedTextInput, InputProps } from '@src/styles/styles';

const commonInputStyles = css`
  width: 100%;
  border-left-width: 3px;
  border-right-width: 3px;
  border-style: solid;
  margin: 2px;
`;

export const Input = styled(TextInput)`
  ${commonInputStyles};
  height: ${props => `${props.height}px;`};
  font-family: ${(props: any) => props.theme.fonts.regular};
  border-color: ${({ theme: { colors }, isError, isFocused }) =>
    isError ? colors.lightDanger : isFocused ? colors.lightBlue : 'white'};
`;

export const MaskedInput = styled(MaskedTextInput)`
  ${commonInputStyles};
  font-family: ${(props: any) => props.theme.fonts.regular};
  border-color: ${({ theme: { colors }, isError, isFocused }) =>
    isError ? colors.lightDanger : isFocused ? colors.lightBlue : 'white'};
`;

export const InputContainer = styled.View<InputProps>``;

export const InputBorderedContainer = styled.View<InputProps>`
  display: flex;
  align-items: center;
  justify-content: center;
  border-style: solid;
  background-color: ${({ theme: { colors }, isError, isFocused }) =>
    isError ? colors.lightDanger : isFocused ? colors.lightBlue : 'white'};
  border-radius: 8px;
  overflow: hidden;
`;
