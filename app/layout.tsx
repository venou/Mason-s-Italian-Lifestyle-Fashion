import type { Metadata } from "next";
import { Analytics } from "@vercel/analytics/next";
import { Montserrat, Playfair_Display } from "next/font/google";
import "./globals.css";

const montserrat = Montserrat({
  subsets: ["latin"],
  variable: "--font-montserrat",
});

const playfairDisplay = Playfair_Display({
  subsets: ["latin"],
  variable: "--font-playfair-display",
});

export const metadata: Metadata = {
  title: "Mason's | Italian Lifestyle & Fashion",
  description: "Artisanal passion since 1974. Discover the new collection SS26.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${montserrat.variable} ${playfairDisplay.variable}`}
      >
        {children}
        <Analytics />
      </body>
    </html>
  );
}
