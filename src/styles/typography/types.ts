import { ThemeColors } from '@src/styles/theme/emotion';

export type FontStyle = 'normal' | 'medium' | 'bold';
export type FontSize = 'sm' | 'md' | 'lg';

export type UDTextProps = {
  fSize?: FontSize;
  fStyle?: FontStyle;
  fFamily?: string;
  color?: keyof ThemeColors;
};

export type UDHProps = {
  color?: keyof ThemeColors;
};
