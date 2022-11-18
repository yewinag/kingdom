import { base, dark, light } from '@utils';
import { useTheme } from 'next-themes';
import React from 'react';
import { ThemeProvider } from 'styled-components';

interface IProps {
  children: JSX.Element | React.ReactNode;
}
export const StyledThemeProvider = ({ children }: IProps) => {
  const { theme } = useTheme();
  const selected = theme === 'dark' ? dark : light;
  return (
    <ThemeProvider theme={{ ...base, ...selected }}>{children}</ThemeProvider>
  );
};
