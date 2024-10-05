import type { Metadata } from "next";
import localFont from "next/font/local";
import "./globals.css";

import { termina } from "@/lib/fonts/termina";
import { ambroise } from "@/lib/fonts/ambroise";
import { ambroise_firmin } from "@/lib/fonts/ambroise";
import { ambroise_francois } from "@/lib/fonts/ambroise";
import CursorDefault from "@/components/cursor/default";

const geistSans = localFont({
  src: "./fonts/GeistVF.woff",
  variable: "--font-geist-sans",
  weight: "100 900",
});
const geistMono = localFont({
  src: "./fonts/GeistMonoVF.woff",
  variable: "--font-geist-mono",
  weight: "100 900",
});

export const metadata: Metadata = {
  title: "Financez",
  description: "Revolutionize your finances.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} ${termina.variable} ${ambroise.variable} ${ambroise_firmin.variable} ${ambroise_francois.variable} antialiased`}
      >
        {children}
        <CursorDefault/>
      </body>
    </html>
  );
}
