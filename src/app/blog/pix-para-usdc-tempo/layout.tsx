import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Estimador de Tempo PIX para USDC | PIX to USDC Time Estimator Brazil 2026',
  description: 'Calcule o tempo e taxas para converter Real (BRL) para USDC via PIX. Compare Binance P2P (5-15 min), Mercado Bitcoin (10-30 min), NovaDAX (10-20 min) com instrucoes passo a passo.',
  keywords: [
    'pix para usdc',
    'pix to usdc',
    'tempo pix usdc',
    'converter brl usdc pix',
    'binance p2p brasil',
    'mercado bitcoin usdc',
    'novadax usdc',
    'quanto tempo pix usdc',
    'taxas pix cripto',
    'comprar usdc brasil',
    'pix instant payment',
    'brazil crypto',
    'brl to usdc time',
    'usdc brasil',
  ],
  openGraph: {
    title: 'Estimador de Tempo PIX para USDC - Calculadora Brasil',
    description: 'Compare tempos e taxas: Binance P2P (5-15 min), Mercado Bitcoin (10-30 min), NovaDAX (10-20 min). Guia completo para converter BRL para USDC via PIX.',
    type: 'article',
    locale: 'pt_BR',
    alternateLocale: 'en_US',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'PIX to USDC Time Estimator | Brazil Crypto Guide',
    description: 'Calculate time & fees to convert BRL to USDC via PIX. Compare Binance P2P, Mercado Bitcoin, NovaDAX.',
  },
  alternates: {
    canonical: 'https://compareequityperps.com/blog/pix-para-usdc-tempo/',
    languages: {
      'pt-BR': 'https://compareequityperps.com/blog/pix-para-usdc-tempo/',
      'en': 'https://compareequityperps.com/blog/pix-para-usdc-tempo/',
    },
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function PIXParaUSDCTempoLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}
