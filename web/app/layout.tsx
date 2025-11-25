import React from "react";
import "./globals.css";
import { GlobalProvider } from "@/contexts/GlobalContext";

export const metadata = {
  title: "Favor Finder",
  description: "Frontend-only Favor Finder (TypeScript)",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body className="min-h-screen">
        <GlobalProvider>
          {children}
        </GlobalProvider>
      </body>
    </html>
  );
}
