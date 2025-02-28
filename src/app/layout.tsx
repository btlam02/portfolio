import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import { FloatingNavDemo } from "@/components/Navbar";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Lam Bui's Portfolio",
  description: "Space for share my project",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        {/* Navbars */}
        <FloatingNavDemo />
        {children}
      </body>
    </html>
  );
}
