import { FontStyle } from '@src/styles/typography/types';
import { ThemeFonts } from '@src/styles/theme/emotion';

export const TextSizeMap: Record<string, { size: number; lineHeight: number }> =
  {
    sm: {
      size: 12,
      lineHeight: 16,
    },
    md: {
      size: 16,
      lineHeight: 22,
    },
    lg: {
      size: 18,
      lineHeight: 26,
    },
  };

export const TextFontMap: Record<FontStyle, keyof ThemeFonts> = {
  normal: 'regular',
  medium: 'medium',
  bold: 'bold',
};
