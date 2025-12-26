import type { Metadata } from "next";
import { Crimson_Pro, Work_Sans } from "next/font/google";
import "./globals.css";

const crimsonPro = Crimson_Pro({
  variable: "--font-crimson",
  subsets: ["latin"],
  weight: ["400", "600", "700"],
});

const workSans = Work_Sans({
  variable: "--font-work-sans",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
});

export const metadata: Metadata = {
  title: "Extracted - Wisdom from Books",
  description: "Extracting wisdom from books worth reading. Curated quotes and insights from philosophy, psychology, and self-improvement.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${crimsonPro.variable} ${workSans.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}