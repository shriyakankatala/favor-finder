import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Favor Finder",
  description: "Find and manage favors with ease",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
