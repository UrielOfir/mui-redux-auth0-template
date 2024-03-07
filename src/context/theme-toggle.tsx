"use client";
import React, {
  createContext,
  useContext,
  ReactNode,
} from "react";
import { ThemeProvider as MUIThemeProvider } from "@mui/material/styles";
import {  lightTheme } from "@/theme"; // Adjust the import path as necessary
import { CssBaseline, createTheme, useMediaQuery } from "@mui/material";

type ThemeContextType = {
  currentTheme: "light" | "dark";
};

const ThemeContext = createContext<ThemeContextType | undefined>(undefined);

export const useThemeContext = () => {
  const context = useContext(ThemeContext);
  if (context === undefined) {
    throw new Error("useThemeContext must be used within a ThemeProvider");
  }
  return context;
};

type ThemeProviderProps = {
  children: ReactNode;
};

export const ThemeProvider = ({ children }: ThemeProviderProps) => {
  const themeMode = "light";
  const theme = createTheme(lightTheme, {
    direction: "rtl",
    components: {
      MuiTableCell: {
        styleOverrides: {
          root: {
            textAlign: "right",
          },
          head: {
            // @ts-ignore
            backgroundColor: lightTheme?.palette?.primary?.main,
            fontWeight: "bold",
            fontSize: "1.1rem",
          },
        },
      },
    },
    typography: {
      fontFamily: ["Arial"].join(","),
    },
  });
  //TODO: Create a new object for the theme
  //      The toggle should only change the theme from light to dark and vice versa

  return (
    <ThemeContext.Provider value={{ currentTheme: themeMode }}>
      <MUIThemeProvider theme={theme}>
        <CssBaseline />
        {children}
      </MUIThemeProvider>
    </ThemeContext.Provider>
  );
};
