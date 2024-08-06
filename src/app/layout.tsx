import type { Metadata } from "next";
import StyledJsxRegistry from './registry'
import "./globals.scss";
import React from "react";
import { Header } from "./components/Header";
import { Footer } from "./components/Footer";
import { Sidebar } from "./components/Sidebar";
import { Navigation } from "./components/Navigation";
import { open_sans } from "./fonts";

export const metadata: Metadata = {
  title: "Nancy Rips",
  description: "Omaha Author of My New Berkshire ABC and Seder Stories",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <StyledJsxRegistry>
        <body className={open_sans.className}>
          <Header />
          <div className="container">
            <Sidebar />
            <div className="main">
              <Navigation />
              {children}
            </div>
          </div>
          <Footer />
        </body>
      </StyledJsxRegistry>
    </html>
  );
}
