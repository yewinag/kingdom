import { useTheme } from 'next-themes';
import { ThemeProvider } from 'styled-components';
import { base, light, dark } from '@utils';
import React from 'react';

interface IProps {
  children: JSX.Element | React.ReactNode;
}
export const StyledThemeProvider = ({ children }: IProps) => {
  const { theme } = useTheme();
  const selected = theme === 'light' ? light : dark;
  return (
    <ThemeProvider theme={{ ...base, ...selected }}>{children}</ThemeProvider>
  );
};
