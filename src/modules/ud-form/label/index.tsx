import React from 'react';
import * as S from './styles';
import { TextProps as ThemeTextProps } from '@src/styles/typography/helpers';
import { TextProps } from 'react-native';

export type UDFormLabelProps = {
  children: string;
} & ThemeTextProps &
  TextProps;

const UDFormLabel = (props: UDFormLabelProps) => {
  const { children, ...otherProps } = props;
  return (
    <S.Label fStyle="medium" {...otherProps}>
      {children}
    </S.Label>
  );
};

export default UDFormLabel;
