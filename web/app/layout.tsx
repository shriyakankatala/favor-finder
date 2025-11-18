import React from "react";
import "./globals.css";

export const metadata = {
  title: "Favor Finder",
  description: "Frontend-only Favor Finder (TypeScript)",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body className="min-h-screen">
        <div className="max-w-4xl mx-auto p-4">
          {children}
        </div>
      </body>
    </html>
  );
}
