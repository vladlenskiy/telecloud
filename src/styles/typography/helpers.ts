// import { RFValue } from 'react-native-responsive-fontsize';
import { Theme } from '@emotion/react';
import { ThemeColors } from '@src/styles/theme/emotion';
import { UDTextProps } from '@src/styles/typography/types';
import { TextFontMap, TextSizeMap } from '@src/styles/typography/maps';

const resolveTextSizeValue = (
  props: UDTextProps,
  property: 'size' | 'lineHeight',
): string => {
  const sizeType = props.fSize || 'md';
  const size = TextSizeMap[sizeType][property];
  // return `${RFValue(size)}px`;
  return `${size}px`;
};

export const resolveTextFontSize = (props: UDTextProps): string => {
  return resolveTextSizeValue(props, 'size');
};

export const resolveTextLineHeight = (props: UDTextProps): string => {
  return resolveTextSizeValue(props, 'lineHeight');
};

export const resolveFontFamily = (
  props: UDTextProps & { theme: Theme },
): string => {
  const styleType = props.fStyle || 'normal';
  const fontFamilyKey = TextFontMap[styleType];
  return props.fFamily || props.theme.fonts[fontFamilyKey];
};

export const resolveTextColor = (
  props: UDTextProps & { theme: Theme },
): string => {
  const targetColor = props.color || 'light';
  return `${props.theme.colors[targetColor as keyof ThemeColors]};`;
};
