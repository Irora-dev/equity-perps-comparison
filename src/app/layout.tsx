import type { Metadata } from "next";
import { Inter } from "next/font/google";
import Script from "next/script";
import { Suspense } from "react";
import "./globals.css";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { AnalyticsProvider } from "@/lib/analytics";
import { organizationSchema, websiteSchema } from "@/lib/schemas";

const inter = Inter({
  subsets: ["latin"],
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL('https://compareequityperps.com'),
  title: {
    default: "Compare Equity Perps | Best Equity Perpetual Trading Platforms",
    template: "%s | Compare Equity Perps",
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
    "Trove Markets",
    "decentralized trading",
    "leveraged trading",
    "crypto derivatives",
  ],
  authors: [{ name: "Compare Equity Perps" }],
  creator: "Compare Equity Perps",
  openGraph: {
    type: "website",
    locale: "en_US",
    siteName: "Compare Equity Perps",
    title: "Compare Equity Perps | Best Equity Perpetual Trading Platforms",
    description:
      "Compare the best equity perpetual trading platforms. Find zero-fee perps, high leverage options, and 24/7 stock trading.",
    images: [
      {
        url: "/og-image.png",
        width: 1200,
        height: 630,
        alt: "Compare Equity Perps - Best Equity Perpetual Trading Platforms",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Compare Equity Perps",
    description: "Compare the best equity perpetual trading platforms",
    images: ["/og-image.png"],
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
  icons: {
    icon: [
      { url: "/favicon.ico" },
      { url: "/favicon-16x16.png", sizes: "16x16", type: "image/png" },
      { url: "/favicon-32x32.png", sizes: "32x32", type: "image/png" },
    ],
    apple: [
      { url: "/apple-touch-icon.png", sizes: "180x180", type: "image/png" },
    ],
  },
  manifest: "/site.webmanifest",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="dark">
      <head>
        <Script
          src="https://www.googletagmanager.com/gtag/js?id=G-6X38MMTJQV"
          strategy="afterInteractive"
        />
        <Script id="google-analytics" strategy="afterInteractive">
          {`
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', 'G-6X38MMTJQV');
          `}
        </Script>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(organizationSchema) }}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(websiteSchema) }}
        />
      </head>
      <body className={`${inter.className} bg-gray-950 text-white antialiased min-h-screen`}>
        <Suspense fallback={null}>
          <AnalyticsProvider>
            <Header />
            {children}
            <Footer />
          </AnalyticsProvider>
        </Suspense>
      </body>
    </html>
  );
}
