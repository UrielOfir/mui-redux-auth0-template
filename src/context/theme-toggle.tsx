'use client';
import React, { createContext, useContext, useState, ReactNode, useEffect } from 'react';
import { ThemeProvider as MUIThemeProvider } from '@mui/material/styles';
import { darkTheme, lightTheme } from '@/theme'; // Adjust the import path as necessary
import { CssBaseline, createTheme, useMediaQuery } from '@mui/material';

type ThemeContextType = {
  toggleTheme: () => void;
  currentTheme: 'light' | 'dark';
  toggleRtl: () => void;
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

  // Initialize themeMode based on prefersDarkMode
  const [themeMode, setTheme] = useState<'light' | 'dark'>(prefersDarkMode ? 'dark' : 'light');
  const [rtl, setRtl] = useState(false);

  const toggleTheme = () => {
    setTheme((prevTheme) => (prevTheme === 'dark' ? 'light' : 'dark'));
  };

  const toggleRtl = () => {
    setRtl((prevRtl) => {
      document.documentElement.dir = prevRtl ? 'ltr' : 'rtl';
      return !prevRtl;
    });
  };

  // Removed useEffect as initial state now directly uses prefersDarkMode

  const theme = React.useMemo(
    () =>
      createTheme(themeMode === 'dark' ? darkTheme : lightTheme, {
        direction: rtl ? 'rtl' : 'ltr', // Ensure the theme direction is also updated
      }),
    [themeMode, rtl] // Added rtl to dependencies array
  );

  return (
    <ThemeContext.Provider value={{ toggleTheme, toggleRtl, currentTheme: themeMode }}>
      <MUIThemeProvider theme={theme}>
        <CssBaseline />
        {children}
      </MUIThemeProvider>
    </ThemeContext.Provider>
  );
};
