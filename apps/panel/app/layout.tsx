import type { Metadata } from "next";
import localFont from "next/font/local";
import "./globals.css";

const supremeSans = localFont({
  src: "./fonts/supreme.woff",
  variable: "--font-supreme",
});

export const metadata: Metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${supremeSans.variable} antialiased`}>{children}</body>
    </html>
  );
}
