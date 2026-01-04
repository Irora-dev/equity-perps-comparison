import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Salary to Trading Capital Calculator | How Much to Trade from Your Salary',
  description: 'Calculate how much of your salary you can safely allocate to trading. Includes emergency fund, savings breakdown, and leverage position sizing for Indian traders.',
  keywords: [
    'salary trading capital calculator',
    'how much salary to trade',
    'trading allocation calculator',
    'risk capital calculator india',
    'salary to usdc calculator',
    'trading budget india',
    'trading capital from salary',
    'investment allocation calculator',
    'disposable income trading',
    'safe trading amount calculator',
  ],
  openGraph: {
    title: 'Salary to Trading Capital Calculator - How Much Can You Trade?',
    description: 'Calculate your safe trading allocation based on salary. Includes risk tolerance levels, emergency fund planning, and position sizing.',
    type: 'website',
  },
  alternates: {
    canonical: 'https://compareequityperps.com/blog/salary-trading-capital-calculator/',
  },
};

export default function SalaryTradingCapitalCalculatorLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}
