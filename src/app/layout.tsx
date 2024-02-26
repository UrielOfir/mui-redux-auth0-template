'use client';

import { AppRouterCacheProvider } from "@mui/material-nextjs/v14-appRouter";
import "./globals.css";
import { ThemeProvider } from "@/context/theme-toggle";
import StoreProvider from "./StoreProvider";
import Header from "@/components/Header";
import SideNavbar from "@/components/SideNavbar";
import { SessionProvider } from "next-auth/react";


export default function RootLayout({
  children,
  session,
}: Readonly<{
  children: React.ReactNode;
  session: any;
}>) {
  return (
    <html lang="he">
      <body>
        <SessionProvider session={session}>
            <AppRouterCacheProvider>
              <ThemeProvider>
                <Header />
                <SideNavbar />
                <StoreProvider count={0}>{children}</StoreProvider>
              </ThemeProvider>
            </AppRouterCacheProvider>
        </SessionProvider>
      </body>
    </html>
  );
}
