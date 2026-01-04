'use client';

import { useState, useMemo } from 'react';
import Link from 'next/link';

type Language = 'pt' | 'en';

interface Transaction {
  id: number;
  buyPrice: number;
  sellPrice: number;
  quantity: number;
}

interface MonthlyRecord {
  month: string;
  totalSales: number;
  totalGain: number;
  taxable: boolean;
  taxOwed: number;
}

const translations = {
  pt: {
    title: 'Calculadora de Imposto sobre Cripto',
    subtitle: 'Calcule seu imposto sobre ganhos de capital com criptomoedas no Brasil',
    tagTool: 'Ferramenta',
    tagInteractive: 'Interativo',

    // Calculator section
    calcTitle: 'Calcule Sua Operacao',
    buyPrice: 'Preco de Compra (R$)',
    sellPrice: 'Preco de Venda (R$)',
    quantity: 'Quantidade',
    addTransaction: 'Adicionar Operacao',
    clearAll: 'Limpar Tudo',

    // Results
    resultsTitle: 'Resultado do Calculo',
    totalSaleValue: 'Valor Total de Venda',
    totalCost: 'Custo Total de Aquisicao',
    grossProfit: 'Lucro Bruto',
    loss: 'Prejuizo',
    threshold: 'Limite Mensal de Isencao',
    taxStatus: 'Status do Imposto',
    exempt: 'ISENTO',
    exemptReason: 'Vendas abaixo de R$35.000/mes',
    taxable: 'TRIBUTAVEL',
    taxableReason: 'Vendas acima de R$35.000/mes',
    taxRate: 'Aliquota Aplicada',
    taxOwed: 'Imposto a Pagar',
    noTax: 'Sem imposto (prejuizo)',

    // Monthly tracking
    monthlyTitle: 'Controle Mensal',
    monthlySubtitle: 'O limite de R$35.000 e calculado mensalmente. Acompanhe suas vendas.',
    month: 'Mes',
    sales: 'Vendas',
    gain: 'Ganho',
    status: 'Status',
    tax: 'Imposto',

    // Tax rates
    ratesTitle: 'Aliquotas de Imposto sobre Ganhos',
    ratesSubtitle: 'A aliquota depende do valor total do ganho de capital no mes',
    upTo: 'Ate',
    above: 'Acima de',

    // DARF section
    darfTitle: 'Como Pagar o DARF',
    darfStep1Title: '1. Baixe o GCAP',
    darfStep1: 'Acesse o site da Receita Federal e baixe o programa GCAP (Ganhos de Capital).',
    darfStep2Title: '2. Preencha as Operacoes',
    darfStep2: 'Insira os dados de cada operacao: data, valor de compra, valor de venda, quantidade.',
    darfStep3Title: '3. Gere o DARF',
    darfStep3: 'O programa calculara o imposto e gerara o DARF automaticamente.',
    darfStep4Title: '4. Pague ate o Vencimento',
    darfStep4: 'O DARF deve ser pago ate o ultimo dia util do mes seguinte a venda.',
    darfCode: 'Codigo do DARF: 4600 (Ganhos de Capital - Ativos Negociados no Mercado de Balcao)',

    // Important notes
    notesTitle: 'Informacoes Importantes',
    note1Title: 'Limite de R$35.000',
    note1: 'O limite de isencao de R$35.000 e sobre o VALOR TOTAL DE VENDAS no mes, nao sobre o lucro. Se voce vendeu R$40.000 e teve R$5.000 de lucro, paga imposto sobre os R$5.000.',
    note2Title: 'Compensacao de Prejuizos',
    note2: 'Prejuizos em um mes podem ser compensados com lucros em meses futuros. Mantenha registro de todas as operacoes.',
    note3Title: 'Declaracao Anual',
    note3: 'Mesmo operacoes isentas devem ser declaradas no IR anual. Criptos acima de R$5.000 vao na ficha de Bens e Direitos (codigo 89).',
    note4Title: 'Stablecoins e Tokens',
    note4: 'Todas as criptomoedas estao sujeitas as mesmas regras, incluindo stablecoins como USDT, USDC e tokens DeFi.',

    // Disclaimer
    disclaimer: 'Esta calculadora e apenas para fins educacionais. Consulte um contador para sua situacao especifica.',

    // CTA
    ctaTitle: 'Comece a Negociar com Seguranca',
    ctaSubtitle: 'Negocie acoes americanas 24/7 com cripto. Mantenha registro de todas as operacoes para declarar corretamente.',
    ctaButton: 'Negociar no Hyperliquid',

    // Navigation
    backHome: 'Voltar para comparacao',
  },
  en: {
    title: 'Brazil Crypto Tax Calculator',
    subtitle: 'Calculate your capital gains tax on cryptocurrency in Brazil',
    tagTool: 'Tool',
    tagInteractive: 'Interactive',

    // Calculator section
    calcTitle: 'Calculate Your Transaction',
    buyPrice: 'Buy Price (R$)',
    sellPrice: 'Sell Price (R$)',
    quantity: 'Quantity',
    addTransaction: 'Add Transaction',
    clearAll: 'Clear All',

    // Results
    resultsTitle: 'Calculation Results',
    totalSaleValue: 'Total Sale Value',
    totalCost: 'Total Acquisition Cost',
    grossProfit: 'Gross Profit',
    loss: 'Loss',
    threshold: 'Monthly Exemption Threshold',
    taxStatus: 'Tax Status',
    exempt: 'EXEMPT',
    exemptReason: 'Sales under R$35,000/month',
    taxable: 'TAXABLE',
    taxableReason: 'Sales exceed R$35,000/month',
    taxRate: 'Applied Tax Rate',
    taxOwed: 'Tax Owed',
    noTax: 'No tax (loss)',

    // Monthly tracking
    monthlyTitle: 'Monthly Tracking',
    monthlySubtitle: 'The R$35,000 limit is calculated monthly. Track your sales.',
    month: 'Month',
    sales: 'Sales',
    gain: 'Gain',
    status: 'Status',
    tax: 'Tax',

    // Tax rates
    ratesTitle: 'Capital Gains Tax Rates',
    ratesSubtitle: 'The rate depends on the total capital gain amount in the month',
    upTo: 'Up to',
    above: 'Above',

    // DARF section
    darfTitle: 'How to Pay the DARF',
    darfStep1Title: '1. Download GCAP',
    darfStep1: 'Visit the Receita Federal website and download the GCAP (Capital Gains) program.',
    darfStep2Title: '2. Enter Your Transactions',
    darfStep2: 'Input each transaction: date, purchase price, sale price, quantity.',
    darfStep3Title: '3. Generate the DARF',
    darfStep3: 'The program will calculate the tax and generate the DARF automatically.',
    darfStep4Title: '4. Pay by Due Date',
    darfStep4: 'The DARF must be paid by the last business day of the month following the sale.',
    darfCode: 'DARF Code: 4600 (Capital Gains - OTC Market Assets)',

    // Important notes
    notesTitle: 'Important Information',
    note1Title: 'R$35,000 Limit',
    note1: 'The R$35,000 exemption is on TOTAL SALE VALUE in the month, not on profit. If you sold R$40,000 and made R$5,000 profit, you pay tax on the R$5,000.',
    note2Title: 'Loss Compensation',
    note2: 'Losses in one month can offset gains in future months. Keep records of all transactions.',
    note3Title: 'Annual Declaration',
    note3: 'Even exempt operations must be declared in your annual tax return. Crypto holdings above R$5,000 go in Assets and Rights (code 89).',
    note4Title: 'Stablecoins and Tokens',
    note4: 'All cryptocurrencies are subject to the same rules, including stablecoins like USDT, USDC, and DeFi tokens.',

    // Disclaimer
    disclaimer: 'This calculator is for educational purposes only. Consult an accountant for your specific situation.',

    // CTA
    ctaTitle: 'Start Trading Safely',
    ctaSubtitle: 'Trade US stocks 24/7 with crypto. Keep records of all transactions for proper tax reporting.',
    ctaButton: 'Trade on Hyperliquid',

    // Navigation
    backHome: 'Back to comparison',
  },
};

const taxRates = [
  { min: 0, max: 5000000, rate: 0.15 },
  { min: 5000000, max: 10000000, rate: 0.175 },
  { min: 10000000, max: 30000000, rate: 0.20 },
  { min: 30000000, max: Infinity, rate: 0.225 },
];

const EXEMPTION_THRESHOLD = 35000;

export default function BrazilCryptoTaxCalculator() {
  const [lang, setLang] = useState<Language>('pt');
  const [transactions, setTransactions] = useState<Transaction[]>([
    { id: 1, buyPrice: 0, sellPrice: 0, quantity: 1 },
  ]);
  const [monthlyRecords, setMonthlyRecords] = useState<MonthlyRecord[]>([]);

  const t = translations[lang];

  const addTransaction = () => {
    setTransactions([
      ...transactions,
      { id: Date.now(), buyPrice: 0, sellPrice: 0, quantity: 1 },
    ]);
  };

  const removeTransaction = (id: number) => {
    if (transactions.length > 1) {
      setTransactions(transactions.filter((t) => t.id !== id));
    }
  };

  const updateTransaction = (id: number, field: keyof Transaction, value: number) => {
    setTransactions(
      transactions.map((t) => (t.id === id ? { ...t, [field]: value } : t))
    );
  };

  const clearAll = () => {
    setTransactions([{ id: 1, buyPrice: 0, sellPrice: 0, quantity: 1 }]);
    setMonthlyRecords([]);
  };

  const calculations = useMemo(() => {
    let totalSaleValue = 0;
    let totalCost = 0;
    let totalGain = 0;

    transactions.forEach((tx) => {
      const saleValue = tx.sellPrice * tx.quantity;
      const cost = tx.buyPrice * tx.quantity;
      const gain = saleValue - cost;

      totalSaleValue += saleValue;
      totalCost += cost;
      if (gain > 0) {
        totalGain += gain;
      }
    });

    const grossProfit = totalSaleValue - totalCost;
    const isExempt = totalSaleValue < EXEMPTION_THRESHOLD;
    const isTaxable = !isExempt && grossProfit > 0;

    // Calculate tax rate based on gain amount
    let taxRate = 0.15;
    for (const bracket of taxRates) {
      if (grossProfit > bracket.min && grossProfit <= bracket.max) {
        taxRate = bracket.rate;
        break;
      }
      if (grossProfit > bracket.max) {
        taxRate = bracket.rate;
      }
    }

    const taxOwed = isTaxable ? grossProfit * taxRate : 0;

    return {
      totalSaleValue,
      totalCost,
      grossProfit,
      isExempt,
      isTaxable,
      taxRate,
      taxOwed,
    };
  }, [transactions]);

  const formatBRL = (value: number) => {
    return new Intl.NumberFormat('pt-BR', {
      style: 'currency',
      currency: 'BRL',
    }).format(value);
  };

  const formatPercent = (value: number) => {
    return `${(value * 100).toFixed(1)}%`;
  };

  const addToMonthlyRecords = () => {
    const monthNames = lang === 'pt'
      ? ['Jan', 'Fev', 'Mar', 'Abr', 'Mai', 'Jun', 'Jul', 'Ago', 'Set', 'Out', 'Nov', 'Dez']
      : ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'];

    const now = new Date();
    const monthLabel = `${monthNames[now.getMonth()]}/${now.getFullYear()}`;

    const newRecord: MonthlyRecord = {
      month: monthLabel,
      totalSales: calculations.totalSaleValue,
      totalGain: calculations.grossProfit,
      taxable: calculations.isTaxable,
      taxOwed: calculations.taxOwed,
    };

    setMonthlyRecords([...monthlyRecords, newRecord]);
  };

  return (
    <div className="min-h-screen bg-gray-950">
      {/* Hero */}
      <section className="relative py-16 px-4 overflow-hidden">
        {/* Brazil flag gradient accent */}
        <div className="absolute inset-0 bg-gradient-to-br from-green-600/10 via-gray-950 to-yellow-500/10" />
        <div className="max-w-4xl mx-auto relative">
          <nav className="text-sm text-gray-500 mb-8">
            <Link href="/" className="hover:text-white">Home</Link>
            <span className="mx-2">/</span>
            <Link href="/blog" className="hover:text-white">Blog</Link>
            <span className="mx-2">/</span>
            <span className="text-gray-400">{lang === 'pt' ? 'Calculadora Imposto Cripto' : 'Brazil Crypto Tax'}</span>
          </nav>

          <div className="flex items-center justify-between mb-4">
            <div className="flex items-center gap-2">
              <span className="px-3 py-1 bg-green-600/20 text-green-400 text-sm font-medium rounded-full">{t.tagTool}</span>
              <span className="px-3 py-1 bg-yellow-500/20 text-yellow-400 text-sm font-medium rounded-full">{t.tagInteractive}</span>
            </div>

            {/* Language Toggle */}
            <div className="flex items-center gap-2">
              <button
                onClick={() => setLang('pt')}
                className={`px-3 py-1.5 rounded-lg text-sm font-medium transition-all flex items-center gap-2 ${
                  lang === 'pt'
                    ? 'bg-green-600 text-white'
                    : 'bg-gray-800 text-gray-400 hover:text-white'
                }`}
              >
                <span className="text-base">🇧🇷</span>
                PT
              </button>
              <button
                onClick={() => setLang('en')}
                className={`px-3 py-1.5 rounded-lg text-sm font-medium transition-all flex items-center gap-2 ${
                  lang === 'en'
                    ? 'bg-blue-600 text-white'
                    : 'bg-gray-800 text-gray-400 hover:text-white'
                }`}
              >
                <span className="text-base">🇺🇸</span>
                EN
              </button>
            </div>
          </div>

          <h1 className="text-4xl sm:text-5xl font-black text-white mb-4">
            {t.title}
          </h1>
          <p className="text-xl text-gray-400 mb-8">
            {t.subtitle}
          </p>
        </div>
      </section>

      {/* Calculator */}
      <section className="py-8 px-4">
        <div className="max-w-4xl mx-auto">
          {/* Transaction Inputs */}
          <div className="bg-gray-900 border border-gray-800 rounded-2xl p-6 mb-8">
            <div className="flex items-center justify-between mb-6">
              <h2 className="text-lg font-bold text-white">{t.calcTitle}</h2>
              <button
                onClick={clearAll}
                className="text-sm text-gray-500 hover:text-red-400 transition-colors"
              >
                {t.clearAll}
              </button>
            </div>

            <div className="space-y-4">
              {transactions.map((tx, index) => (
                <div
                  key={tx.id}
                  className="grid grid-cols-1 sm:grid-cols-4 gap-4 p-4 bg-gray-800/50 rounded-xl"
                >
                  <div>
                    <label className="block text-sm text-gray-400 mb-1">{t.buyPrice}</label>
                    <input
                      type="number"
                      value={tx.buyPrice || ''}
                      onChange={(e) => updateTransaction(tx.id, 'buyPrice', Number(e.target.value))}
                      placeholder="0.00"
                      className="w-full px-4 py-2.5 bg-gray-900 border border-gray-700 rounded-lg text-white focus:outline-none focus:border-green-500"
                    />
                  </div>
                  <div>
                    <label className="block text-sm text-gray-400 mb-1">{t.sellPrice}</label>
                    <input
                      type="number"
                      value={tx.sellPrice || ''}
                      onChange={(e) => updateTransaction(tx.id, 'sellPrice', Number(e.target.value))}
                      placeholder="0.00"
                      className="w-full px-4 py-2.5 bg-gray-900 border border-gray-700 rounded-lg text-white focus:outline-none focus:border-yellow-500"
                    />
                  </div>
                  <div>
                    <label className="block text-sm text-gray-400 mb-1">{t.quantity}</label>
                    <input
                      type="number"
                      value={tx.quantity || ''}
                      onChange={(e) => updateTransaction(tx.id, 'quantity', Number(e.target.value))}
                      placeholder="1"
                      step="any"
                      className="w-full px-4 py-2.5 bg-gray-900 border border-gray-700 rounded-lg text-white focus:outline-none focus:border-green-500"
                    />
                  </div>
                  <div className="flex items-end">
                    {transactions.length > 1 && (
                      <button
                        onClick={() => removeTransaction(tx.id)}
                        className="w-full py-2.5 bg-red-500/20 text-red-400 rounded-lg hover:bg-red-500/30 transition-colors"
                      >
                        <svg className="w-5 h-5 mx-auto" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16" />
                        </svg>
                      </button>
                    )}
                  </div>
                </div>
              ))}
            </div>

            <button
              onClick={addTransaction}
              className="mt-4 w-full py-3 bg-gray-800 border border-gray-700 border-dashed rounded-xl text-gray-400 hover:text-white hover:border-green-500/50 transition-colors flex items-center justify-center gap-2"
            >
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 4v16m8-8H4" />
              </svg>
              {t.addTransaction}
            </button>
          </div>

          {/* Results */}
          <div className="bg-gray-900 border border-gray-800 rounded-2xl p-6 mb-8">
            <h2 className="text-lg font-bold text-white mb-6">{t.resultsTitle}</h2>

            <div className="grid sm:grid-cols-2 gap-6">
              {/* Left column - Values */}
              <div className="space-y-4">
                <div className="flex justify-between items-center py-3 border-b border-gray-800">
                  <span className="text-gray-400">{t.totalSaleValue}</span>
                  <span className="text-white font-mono text-lg">{formatBRL(calculations.totalSaleValue)}</span>
                </div>
                <div className="flex justify-between items-center py-3 border-b border-gray-800">
                  <span className="text-gray-400">{t.totalCost}</span>
                  <span className="text-white font-mono text-lg">{formatBRL(calculations.totalCost)}</span>
                </div>
                <div className="flex justify-between items-center py-3 border-b border-gray-800">
                  <span className="text-gray-400">{calculations.grossProfit >= 0 ? t.grossProfit : t.loss}</span>
                  <span className={`font-mono text-lg font-bold ${calculations.grossProfit >= 0 ? 'text-green-400' : 'text-red-400'}`}>
                    {formatBRL(Math.abs(calculations.grossProfit))}
                  </span>
                </div>
                <div className="flex justify-between items-center py-3">
                  <span className="text-gray-400">{t.threshold}</span>
                  <span className="text-yellow-400 font-mono">{formatBRL(EXEMPTION_THRESHOLD)}</span>
                </div>
              </div>

              {/* Right column - Tax status */}
              <div className="bg-gray-800/50 rounded-xl p-5">
                <div className="text-center mb-4">
                  <span className="text-gray-400 text-sm">{t.taxStatus}</span>
                  <div className={`mt-2 inline-block px-4 py-2 rounded-lg font-bold text-lg ${
                    calculations.isExempt
                      ? 'bg-green-500/20 text-green-400 border border-green-500/30'
                      : calculations.grossProfit <= 0
                        ? 'bg-gray-500/20 text-gray-400 border border-gray-500/30'
                        : 'bg-yellow-500/20 text-yellow-400 border border-yellow-500/30'
                  }`}>
                    {calculations.isExempt ? t.exempt : calculations.grossProfit <= 0 ? t.noTax : t.taxable}
                  </div>
                  <p className="text-gray-500 text-sm mt-2">
                    {calculations.isExempt ? t.exemptReason : calculations.grossProfit <= 0 ? '' : t.taxableReason}
                  </p>
                </div>

                {calculations.isTaxable && (
                  <>
                    <div className="flex justify-between items-center py-3 border-t border-gray-700">
                      <span className="text-gray-400">{t.taxRate}</span>
                      <span className="text-white font-bold">{formatPercent(calculations.taxRate)}</span>
                    </div>
                    <div className="flex justify-between items-center py-3 border-t border-gray-700">
                      <span className="text-gray-400">{t.taxOwed}</span>
                      <span className="text-yellow-400 font-mono text-xl font-bold">
                        {formatBRL(calculations.taxOwed)}
                      </span>
                    </div>
                  </>
                )}

                <button
                  onClick={addToMonthlyRecords}
                  disabled={calculations.totalSaleValue === 0}
                  className="mt-4 w-full py-2.5 bg-green-600 text-white rounded-lg font-medium hover:bg-green-500 transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
                >
                  {lang === 'pt' ? 'Adicionar ao Controle Mensal' : 'Add to Monthly Tracking'}
                </button>
              </div>
            </div>
          </div>

          {/* Monthly Tracking */}
          {monthlyRecords.length > 0 && (
            <div className="bg-gray-900 border border-gray-800 rounded-2xl p-6 mb-8">
              <h2 className="text-lg font-bold text-white mb-2">{t.monthlyTitle}</h2>
              <p className="text-gray-400 text-sm mb-6">{t.monthlySubtitle}</p>

              <div className="overflow-x-auto">
                <table className="w-full">
                  <thead>
                    <tr className="border-b border-gray-800">
                      <th className="text-left py-3 px-4 text-gray-400 font-medium text-sm">{t.month}</th>
                      <th className="text-right py-3 px-4 text-gray-400 font-medium text-sm">{t.sales}</th>
                      <th className="text-right py-3 px-4 text-gray-400 font-medium text-sm">{t.gain}</th>
                      <th className="text-center py-3 px-4 text-gray-400 font-medium text-sm">{t.status}</th>
                      <th className="text-right py-3 px-4 text-gray-400 font-medium text-sm">{t.tax}</th>
                    </tr>
                  </thead>
                  <tbody>
                    {monthlyRecords.map((record, index) => (
                      <tr key={index} className="border-b border-gray-800/50">
                        <td className="py-3 px-4 text-white font-medium">{record.month}</td>
                        <td className="py-3 px-4 text-right text-white font-mono">{formatBRL(record.totalSales)}</td>
                        <td className={`py-3 px-4 text-right font-mono ${record.totalGain >= 0 ? 'text-green-400' : 'text-red-400'}`}>
                          {formatBRL(record.totalGain)}
                        </td>
                        <td className="py-3 px-4 text-center">
                          <span className={`px-2 py-1 rounded text-xs font-medium ${
                            record.taxable
                              ? 'bg-yellow-500/20 text-yellow-400'
                              : 'bg-green-500/20 text-green-400'
                          }`}>
                            {record.taxable ? t.taxable : t.exempt}
                          </span>
                        </td>
                        <td className="py-3 px-4 text-right text-yellow-400 font-mono font-bold">
                          {formatBRL(record.taxOwed)}
                        </td>
                      </tr>
                    ))}
                  </tbody>
                  <tfoot>
                    <tr className="bg-gray-800/30">
                      <td className="py-3 px-4 text-white font-bold">Total</td>
                      <td className="py-3 px-4 text-right text-white font-mono font-bold">
                        {formatBRL(monthlyRecords.reduce((sum, r) => sum + r.totalSales, 0))}
                      </td>
                      <td className="py-3 px-4 text-right text-green-400 font-mono font-bold">
                        {formatBRL(monthlyRecords.reduce((sum, r) => sum + r.totalGain, 0))}
                      </td>
                      <td className="py-3 px-4"></td>
                      <td className="py-3 px-4 text-right text-yellow-400 font-mono font-bold">
                        {formatBRL(monthlyRecords.reduce((sum, r) => sum + r.taxOwed, 0))}
                      </td>
                    </tr>
                  </tfoot>
                </table>
              </div>
            </div>
          )}

          {/* Tax Rates */}
          <div className="bg-gray-900 border border-gray-800 rounded-2xl p-6 mb-8">
            <h2 className="text-lg font-bold text-white mb-2">{t.ratesTitle}</h2>
            <p className="text-gray-400 text-sm mb-6">{t.ratesSubtitle}</p>

            <div className="grid sm:grid-cols-4 gap-4">
              {taxRates.map((bracket, index) => (
                <div
                  key={index}
                  className={`p-4 rounded-xl border ${
                    calculations.isTaxable && calculations.grossProfit > bracket.min && calculations.grossProfit <= bracket.max
                      ? 'bg-yellow-500/10 border-yellow-500/50'
                      : 'bg-gray-800/50 border-gray-700'
                  }`}
                >
                  <div className="text-2xl font-bold text-white mb-2">
                    {(bracket.rate * 100).toFixed(1)}%
                  </div>
                  <div className="text-sm text-gray-400">
                    {bracket.min === 0 ? t.upTo : t.above} {formatBRL(bracket.min === 0 ? bracket.max : bracket.min)}
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* DARF Payment Process */}
          <div className="bg-gray-900 border border-gray-800 rounded-2xl p-6 mb-8">
            <h2 className="text-lg font-bold text-white mb-6">{t.darfTitle}</h2>

            <div className="grid sm:grid-cols-2 gap-6">
              <div className="space-y-6">
                <div className="flex gap-4">
                  <div className="w-10 h-10 bg-green-600/20 rounded-full flex items-center justify-center flex-shrink-0">
                    <span className="text-green-400 font-bold">1</span>
                  </div>
                  <div>
                    <h3 className="text-white font-medium mb-1">{t.darfStep1Title}</h3>
                    <p className="text-gray-400 text-sm">{t.darfStep1}</p>
                  </div>
                </div>
                <div className="flex gap-4">
                  <div className="w-10 h-10 bg-green-600/20 rounded-full flex items-center justify-center flex-shrink-0">
                    <span className="text-green-400 font-bold">2</span>
                  </div>
                  <div>
                    <h3 className="text-white font-medium mb-1">{t.darfStep2Title}</h3>
                    <p className="text-gray-400 text-sm">{t.darfStep2}</p>
                  </div>
                </div>
              </div>
              <div className="space-y-6">
                <div className="flex gap-4">
                  <div className="w-10 h-10 bg-yellow-500/20 rounded-full flex items-center justify-center flex-shrink-0">
                    <span className="text-yellow-400 font-bold">3</span>
                  </div>
                  <div>
                    <h3 className="text-white font-medium mb-1">{t.darfStep3Title}</h3>
                    <p className="text-gray-400 text-sm">{t.darfStep3}</p>
                  </div>
                </div>
                <div className="flex gap-4">
                  <div className="w-10 h-10 bg-yellow-500/20 rounded-full flex items-center justify-center flex-shrink-0">
                    <span className="text-yellow-400 font-bold">4</span>
                  </div>
                  <div>
                    <h3 className="text-white font-medium mb-1">{t.darfStep4Title}</h3>
                    <p className="text-gray-400 text-sm">{t.darfStep4}</p>
                  </div>
                </div>
              </div>
            </div>

            <div className="mt-6 p-4 bg-gray-800/50 rounded-xl border border-green-500/30">
              <p className="text-green-400 text-sm font-medium">{t.darfCode}</p>
            </div>
          </div>

          {/* Important Notes */}
          <div className="grid sm:grid-cols-2 gap-6 mb-8">
            <div className="bg-gray-900 border border-gray-800 rounded-xl p-5">
              <h3 className="text-yellow-400 font-bold mb-3 flex items-center gap-2">
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
                {t.note1Title}
              </h3>
              <p className="text-gray-400 text-sm">{t.note1}</p>
            </div>
            <div className="bg-gray-900 border border-gray-800 rounded-xl p-5">
              <h3 className="text-green-400 font-bold mb-3 flex items-center gap-2">
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
                {t.note2Title}
              </h3>
              <p className="text-gray-400 text-sm">{t.note2}</p>
            </div>
            <div className="bg-gray-900 border border-gray-800 rounded-xl p-5">
              <h3 className="text-blue-400 font-bold mb-3 flex items-center gap-2">
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                </svg>
                {t.note3Title}
              </h3>
              <p className="text-gray-400 text-sm">{t.note3}</p>
            </div>
            <div className="bg-gray-900 border border-gray-800 rounded-xl p-5">
              <h3 className="text-purple-400 font-bold mb-3 flex items-center gap-2">
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 9V7a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2m2 4h10a2 2 0 002-2v-6a2 2 0 00-2-2H9a2 2 0 00-2 2v6a2 2 0 002 2zm7-5a2 2 0 11-4 0 2 2 0 014 0z" />
                </svg>
                {t.note4Title}
              </h3>
              <p className="text-gray-400 text-sm">{t.note4}</p>
            </div>
          </div>

          {/* Disclaimer */}
          <div className="bg-yellow-500/10 border border-yellow-500/30 rounded-xl p-6 mb-8">
            <div className="flex items-start gap-4">
              <svg className="w-6 h-6 text-yellow-400 flex-shrink-0 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z" />
              </svg>
              <p className="text-gray-300 text-sm">{t.disclaimer}</p>
            </div>
          </div>

          {/* CTA */}
          <div className="bg-gradient-to-br from-green-600/20 to-yellow-500/20 border border-green-500/30 rounded-2xl p-8 text-center mb-8">
            <h2 className="text-2xl font-bold text-white mb-4">{t.ctaTitle}</h2>
            <p className="text-gray-400 mb-6">{t.ctaSubtitle}</p>
            <a
              href="https://app.hyperliquid.xyz/join/IRORA"
              target="_blank"
              rel="noopener sponsored"
              className="inline-flex items-center justify-center gap-2 px-6 py-3 bg-green-600 text-white rounded-xl font-bold hover:bg-green-500 transition-colors"
            >
              {t.ctaButton}
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
              </svg>
            </a>
          </div>

          {/* Related Tools */}
          <div className="mt-12">
            <h2 className="text-xl font-bold text-white mb-4">
              {lang === 'pt' ? 'Outras Ferramentas' : 'Other Tools'}
            </h2>
            <div className="grid sm:grid-cols-3 gap-4">
              <Link href="/blog/pnl-simulator" className="bg-gray-900 border border-gray-800 rounded-xl p-4 hover:border-purple-500/50 transition-colors">
                <span className="text-purple-400 text-xs font-medium">{lang === 'pt' ? 'SIMULADOR' : 'SIMULATOR'}</span>
                <h3 className="text-white font-medium mt-1">{lang === 'pt' ? 'Simulador de P&L' : 'PnL Simulator'}</h3>
                <p className="text-gray-500 text-sm mt-1">{lang === 'pt' ? 'Simule lucros e perdas' : 'Simulate profit and loss'}</p>
              </Link>
              <Link href="/blog/fee-calculator" className="bg-gray-900 border border-gray-800 rounded-xl p-4 hover:border-green-500/50 transition-colors">
                <span className="text-green-400 text-xs font-medium">{lang === 'pt' ? 'CALCULADORA' : 'CALCULATOR'}</span>
                <h3 className="text-white font-medium mt-1">{lang === 'pt' ? 'Calculadora de Taxas' : 'Fee Calculator'}</h3>
                <p className="text-gray-500 text-sm mt-1">{lang === 'pt' ? 'Compare custos de trading' : 'Compare trading costs'}</p>
              </Link>
              <Link href="/blog/trade-us-stocks-from-brazil" className="bg-gray-900 border border-gray-800 rounded-xl p-4 hover:border-yellow-500/50 transition-colors">
                <span className="text-yellow-400 text-xs font-medium">{lang === 'pt' ? 'GUIA' : 'GUIDE'}</span>
                <h3 className="text-white font-medium mt-1">{lang === 'pt' ? 'Negociar do Brasil' : 'Trade from Brazil'}</h3>
                <p className="text-gray-500 text-sm mt-1">{lang === 'pt' ? 'BRL para USDC via PIX' : 'BRL to USDC via PIX'}</p>
              </Link>
            </div>
          </div>

          {/* Back to Home */}
          <div className="mt-12 text-center">
            <Link href="/" className="inline-flex items-center gap-2 text-gray-400 hover:text-white transition-colors">
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
              </svg>
              {t.backHome}
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
