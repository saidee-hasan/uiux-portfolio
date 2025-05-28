import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/shared/navbar";
import Footer from './../components/shared/Footer';



const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Tasmina Portfolio",
  description: "Created by Tasmina Akter",
};

// export const metadata = {
//   title: "Custom Cursor App",
//   description: "Next.js + Animated Cursor",
// };

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased bg-gray-900`}
      >
        <Navbar />
        <main className="min-h-screen pt-24">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
