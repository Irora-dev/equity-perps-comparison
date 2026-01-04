import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Jak Zamienic PLN na USDC | Przewodnik dla Polski 2025',
  description: 'Kompletny przewodnik jak zamienic PLN na USDC w Polsce. Porownaj metody: Binance, Kraken, Zonda. Uzyj BLIK, Przelewy24, przelew bankowy z PKO BP, mBank, Santander, ING.',
  keywords: [
    'jak zamienic PLN na USDC',
    'PLN to USDC',
    'BLIK kryptowaluty',
    'Binance Polska',
    'Zonda BitBay',
    'Kraken Polska',
    'Przelewy24 crypto',
    'kup USDC w Polsce',
    'wymiana PLN na USDC',
    'USDC Polska'
  ],
  alternates: {
    languages: {
      'pl-PL': '/blog/jak-zamienic-pln-na-usdc',
      'en-US': '/blog/jak-zamienic-pln-na-usdc',
    },
  },
  openGraph: {
    title: 'Jak Zamienic PLN na USDC | Przewodnik dla Polski',
    description: 'Kompletny przewodnik jak zamienic zlotowki na USDC. BLIK, Przelewy24, przelew bankowy - najszybsze i najtansze metody.',
    locale: 'pl_PL',
    alternateLocale: 'en_US',
    type: 'article',
  },
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return children;
}
