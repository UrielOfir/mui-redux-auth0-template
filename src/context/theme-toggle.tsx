'use client';
import React, { createContext, useContext, useState, ReactNode, useEffect } from 'react';
import { ThemeProvider as MUIThemeProvider } from '@mui/material/styles';
import { darkTheme, lightTheme } from '@/theme'; // Adjust the import path as necessary
import { CssBaseline, createTheme, useMediaQuery } from '@mui/material';

type ThemeContextType = {
  toggleTheme: () => void;
  currentTheme: 'light' | 'dark';
};

const ThemeContext = createContext<ThemeContextType | undefined>(undefined);

export const useThemeContext = () => {
  const context = useContext(ThemeContext);
  if (context === undefined) {
    throw new Error('useThemeContext must be used within a ThemeProvider');
  }
  return context;
};

type ThemeProviderProps = {
  children: ReactNode;
};

export const ThemeProvider = ({ children }: ThemeProviderProps) => {
  const prefersDarkMode = useMediaQuery('(prefers-color-scheme: dark)');

  const [themeMode, setTheme] = useState<'light' | 'dark'>(prefersDarkMode ? 'dark' : 'light');

  const toggleTheme = () => {
    setTheme((prevTheme) => (prevTheme === 'dark' ? 'light' : 'dark'));
  };


//TODO: Create a new object for the theme
//      The toggle should only change the theme from light to dark and vice versa
  const theme = React.useMemo(
    () =>
      createTheme(themeMode === 'dark' ? darkTheme : lightTheme, {
        direction:  'rtl',
        components: {
          MuiTableCell: {
            styleOverrides: {
              root: {
                textAlign: 'right',
              },
              head: { 
                // @ts-ignore
                backgroundColor: themeMode === 'dark' ? darkTheme?.palette?.primary?.main : lightTheme?.palette?.primary?.main,
                fontWeight: 'bold',
              fontSize: '1.1rem',},
            },
          },
        },
        typography: {
          fontFamily: [
            'Arial',
          ].join(','),
        },
      }),
    [themeMode]
  );

  return (
    <ThemeContext.Provider value={{ toggleTheme , currentTheme: themeMode }}>
      <MUIThemeProvider theme={theme}>
        <CssBaseline />
        {children}
      </MUIThemeProvider>
    </ThemeContext.Provider>
  );
};
