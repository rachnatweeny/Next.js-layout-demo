import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Link from "next/link";
import Button from "./components/button";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
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
      <body
        // className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <div style={{backgroundColor:"pink", height:"30px"}}>
        <Link href="/post"> { <Button> Post</Button>}</Link>
       <Link href="/contact"> { <Button>Contact</Button>}</Link>
       <Link href="/docs"> { <Button>Docs</Button>}</Link>
        {children}

        </div>
        
      </body>
    </html>
  );
}
