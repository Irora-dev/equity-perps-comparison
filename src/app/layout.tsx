import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Header from "@/components/Header";

const inter = Inter({
  subsets: ["latin"],
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL('https://equityperps.com'), // Update with your domain
  title: {
    default: "Equity Perps Comparisonator | Compare Equity Perpetual Trading Platforms",
    template: "%s | Equity Perps Comparisonator",
  },
  description:
    "Compare the best equity perpetual trading platforms. Find zero-fee perps, high leverage options, and 24/7 stock trading on Hyperliquid, Lighter, Ostium, Avantis, and more.",
  keywords: [
    "equity perps",
    "perpetual futures",
    "equity perpetuals",
    "stock perps",
    "Hyperliquid",
    "Lighter",
    "Ostium",
    "Avantis",
    "TradeXYZ",
    "Variational",
    "Tread.fi",
    "Trove Markets",
    "decentralized trading",
    "leveraged trading",
    "crypto derivatives",
  ],
  authors: [{ name: "Equity Perps Comparisonator" }],
  creator: "Equity Perps Comparisonator",
  openGraph: {
    type: "website",
    locale: "en_US",
    siteName: "Equity Perps Comparisonator",
    title: "Equity Perps Comparisonator | Compare Equity Perpetual Trading Platforms",
    description:
      "Compare the best equity perpetual trading platforms. Find zero-fee perps, high leverage options, and 24/7 stock trading.",
  },
  twitter: {
    card: "summary_large_image",
    title: "Equity Perps Comparisonator",
    description: "Compare the best equity perpetual trading platforms",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="dark">
      <body className={`${inter.className} bg-gray-950 text-white antialiased min-h-screen`}>
        <Header />
        {children}
        <footer className="border-t border-gray-800 py-8 mt-16">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <p className="text-center text-gray-500 text-sm">
              Equity Perps Comparisonator - Compare equity perpetual trading platforms.
              <br />
              <span className="text-xs">
                Disclaimer: This site contains affiliate links. Trading perpetual futures involves significant risk.
              </span>
            </p>
          </div>
        </footer>
      </body>
    </html>
  );
}
