import styled from '@emotion/native';
import { TouchableOpacity } from 'react-native';
import { UDText } from '@src/styles/typography';

type ButtonProps = {
  withSpacings?: boolean;
};

// background-color: ${props =>
//     props.disabled ? props.theme.colors.darkGray : props.theme.colors.dark};
export const Button = styled(TouchableOpacity)`
  align-self: center;
  justify-content: center;
  flex: 1;
  height: 45px;
  background-color: transparent;
  border-radius: 12px;
  elevation: 12;
  border-width: 1px;
  border-color: ${({ theme }) => theme.colors.softGrey};
  ${(props: ButtonProps) => (props.withSpacings ? 'max-width: 86%;' : '')}
`;

export const ButtonLabel = styled(UDText)`
  color: #fff;
  align-self: center;
`;
ButtonLabel.defaultProps = {
  fSize: 'lg',
  fStyle: 'medium',
};
