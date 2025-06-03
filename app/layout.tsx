import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import CustomCursor from "@/components/shared/CustomCursor";
import { ThemeProvider } from "@/components/shared/ThemeProvider";
import Header from "@/components/Header/Header";
import Footer from "@/components/shared/Footer";




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


export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning className="scrollbar-thin scrollbar-thumb-primary scrollbar-track-secondary">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
          disableTransitionOnChange
        >
          <Header />
          <CustomCursor />
          <main className="min-h-[calc(100vh-69px)] ">{children}</main>
          <Footer />
        </ThemeProvider>
      </body>
    </html>
  );
}
