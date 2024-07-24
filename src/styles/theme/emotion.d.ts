import '@emotion/react';

export interface ThemeColors {
  light: string;
  dark: string;
}

export type ThemeColorsName = 'light' | 'dark';

export interface ThemeFonts {
  bold: string;
  light: string;
  regular: string;
}

declare module '@emotion/react' {
  export interface Theme {
    colors: ThemeColors;
    fonts: ThemeFonts;
  }
}
