"use client";

import { AppRouterCacheProvider } from "@mui/material-nextjs/v14-appRouter";
import "./globals.css";
import { ThemeProvider } from "@/context/theme-toggle";
import StoreProvider from "./StoreProvider";
import Header from "@/components/Header";
import SideNavbar from "@/components/SideNavbar";
import { SessionProvider, useSession } from "next-auth/react";
import { Box } from "@mui/material";
import styles from "./page.module.css";

const Main = ({ children }: { children: React.ReactNode }) => {
  const { data: session } = useSession();
  if (!session) {
    // TODO: Please login
    return null;
  }
  return <main className={styles.main}>{children}</main>;
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {

  return (
    <html lang="he">
      <body>
        <SessionProvider >
          <AppRouterCacheProvider>
            <ThemeProvider>
              <Box sx={{ display: "flex" }}>
                <Header />
                <SideNavbar />
                <StoreProvider count={0}>
                  <Main>{children}</Main>
                </StoreProvider>
              </Box>
            </ThemeProvider>
          </AppRouterCacheProvider>
        </SessionProvider>
      </body>
    </html>
  );
}
