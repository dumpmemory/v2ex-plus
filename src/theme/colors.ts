import { DefaultTheme } from '@react-navigation/native';

export const colors = {
  white: '#ffffff',
  black: '#000000',
  primary: '#f2994a',
  secondary: '#363433',
  secondaryText: '#737C79',
  grey: '#D8D8D8',
  lightGrey: '#F5F6FA',
  blue: '#0070C9',
};

export const defaultTheme = {
  ...DefaultTheme,
  colors: {
    ...DefaultTheme.colors,
    ...colors,
  },
};
