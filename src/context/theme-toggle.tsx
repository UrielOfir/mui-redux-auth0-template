'use client';
import React, { createContext, useContext, useState, ReactNode, useEffect } from 'react';
import { ThemeProvider as MUIThemeProvider } from '@mui/material/styles';
import { darkTheme, lightTheme } from '@/theme'; // Adjust the import path as necessary
import { CssBaseline, createTheme, useMediaQuery } from '@mui/material';

type ThemeContextType = {
  toggleTheme: () => void;
  currentTheme: 'light' | 'dark';
  toggleRtl: () => void;
  toggleDrawerOpen: (v?: boolean) => void;
  drawerOpen: boolean;
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
  const [rtl, setRtl] = useState(true);
  const [drawerOpen, setDrawerOpen] = useState(false);

  const toggleTheme = () => {
    setTheme((prevTheme) => (prevTheme === 'dark' ? 'light' : 'dark'));
  };

  const toggleRtl = () => {
    setRtl((prevRtl) => {
      document.documentElement.dir = prevRtl ? 'ltr' : 'rtl';
      return !prevRtl;
    });
  };

  const toggleDrawerOpen = (v?: boolean) => {
    if (v === undefined) {
      setDrawerOpen((prevDrawerOpen) => !prevDrawerOpen);
      return;
    }
    setDrawerOpen(v);
  };

  // Removed useEffect as initial state now directly uses prefersDarkMode

  const theme = React.useMemo(
    () =>
      createTheme(themeMode === 'dark' ? darkTheme : lightTheme, {
        direction: rtl ? 'ltr' : 'rtl', // Ensure the theme direction is also updated
      }),
    [themeMode, rtl] // Added rtl to dependencies array
  );

  return (
    <ThemeContext.Provider
      value={{ toggleTheme, toggleRtl, currentTheme: themeMode, toggleDrawerOpen, drawerOpen }}
    >
      <MUIThemeProvider theme={theme}>
        <CssBaseline />
        {children}
      </MUIThemeProvider>
    </ThemeContext.Provider>
  );
};
