import { RFValue } from 'react-native-responsive-fontsize';
import styled from '@emotion/native';
import {
  resolveFontFamily,
  resolveTextColor,
  resolveTextFontSize,
  resolveTextLineHeight,
} from '@src/styles/typography/helpers';
import { UDHProps, UDTextProps } from '@src/styles/typography/types';

export const UDText = styled.Text<UDTextProps>`
  letter-spacing: -0.1px;
  color: ${props => resolveTextColor(props)};
  font-size: ${props => resolveTextFontSize(props)};
  line-height: ${props => resolveTextLineHeight(props)};
  font-family: ${props => resolveFontFamily(props)};
`;

export const BaseHText = styled.Text<UDHProps>`
  color: ${props => resolveTextColor(props)};
`;

export const UDTextLink = styled(UDText)`
  text-decoration-line: underline;
  text-decoration-color: #666;
  text-decoration-style: solid;
`;

export const H1 = styled(BaseHText)`
  letter-spacing: -0.1px;
  font-family: ${props => props.theme.fonts.regular};
  font-size: ${() => `${RFValue(36)}px`};
  line-height: ${() => `${RFValue(48)}px`};
`;

export const H2 = styled(BaseHText)`
  font-family: ${props => props.theme.fonts.medium};
  font-size: ${() => `${RFValue(24)}px`};
  line-height: ${() => `${RFValue(32)}px`};
`;

export const H3 = styled(BaseHText)`
  font-family: ${props => props.theme.fonts.medium};
  font-size: ${() => `${RFValue(18)}px`};
  line-height: ${() => `${RFValue(22)}px`};
`;

export const H4 = styled(BaseHText)`
  font-family: ${props => props.theme.fonts.regular};
  font-size: ${() => `${RFValue(16)}px`};
  line-height: ${() => `${RFValue(20)}px`};
`;

export const H5 = styled(BaseHText)`
  font-family: ${props => props.theme.fonts.regular};
  font-size: ${() => `${RFValue(14)}px`};
  line-height: ${() => `${RFValue(18)}px`};
`;

export const H6 = styled(BaseHText)`
  font-family: ${props => props.theme.fonts.regular};
  font-size: ${() => `${RFValue(12)}px`};
  line-height: ${() => `${RFValue(16)}px`};
`;
