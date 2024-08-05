import '@emotion/react';

export interface ThemeColors {
  dark: string;
  light: string;
  darkBlue: string;
  darkGray: string;
  paleGrey: string;
  paleBlue: string;
  softGrey: string;
  lightOrange: string;
  paleYellow: string;
  lightGrey: string;
  lightBlue: string;
  danger: string;
  lightDanger: string;
  success: string;
  successDark: string;
  info: string;
  lightGray2: string;
}

export interface ThemeFonts {
  bold: string;
  medium: string;
  regular: string;
}

declare module '@emotion/react' {
  export interface Theme {
    colors: ThemeColors;
    fonts: ThemeFonts;
  }
}
