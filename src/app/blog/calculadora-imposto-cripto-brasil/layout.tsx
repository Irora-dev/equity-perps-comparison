import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Calculadora de Imposto sobre Cripto Brasil 2025 | Brazil Crypto Tax Calculator',
  description: 'Calcule o imposto sobre ganhos de capital com criptomoedas no Brasil. Vendas acima de R$35.000/mes sao tributaveis em 15-22,5%. Saiba como pagar DARF corretamente.',
  keywords: [
    'imposto cripto brasil',
    'calculadora imposto bitcoin',
    'ganho de capital criptomoeda',
    'DARF cripto',
    'imposto renda bitcoin',
    'tributacao criptomoedas brasil',
    'Brazil crypto tax',
    'crypto capital gains tax Brazil',
    'R$35000 crypto exemption',
    'GCAP crypto',
  ],
  openGraph: {
    title: 'Calculadora de Imposto sobre Cripto Brasil 2025',
    description: 'Calcule seu imposto sobre ganhos com criptomoedas. Isento ate R$35.000/mes em vendas. Aliquotas de 15% a 22,5%.',
    type: 'website',
    locale: 'pt_BR',
    alternateLocale: 'en_US',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Calculadora de Imposto sobre Cripto Brasil 2025',
    description: 'Calcule seu imposto sobre ganhos com criptomoedas. Isento ate R$35.000/mes em vendas.',
  },
  alternates: {
    canonical: 'https://equityperps.com/blog/calculadora-imposto-cripto-brasil',
    languages: {
      'pt-BR': '/blog/calculadora-imposto-cripto-brasil',
      'en': '/blog/calculadora-imposto-cripto-brasil',
    },
  },
};

const jsonLd = {
  '@context': 'https://schema.org',
  '@type': 'WebApplication',
  name: 'Calculadora de Imposto sobre Cripto Brasil',
  alternateName: 'Brazil Crypto Tax Calculator',
  description: 'Interactive calculator to compute Brazilian capital gains tax on cryptocurrency transactions.',
  url: 'https://equityperps.com/blog/calculadora-imposto-cripto-brasil',
  applicationCategory: 'FinanceApplication',
  operatingSystem: 'Any',
  offers: {
    '@type': 'Offer',
    price: '0',
    priceCurrency: 'BRL',
  },
  author: {
    '@type': 'Organization',
    name: 'Equity Perps',
  },
  inLanguage: ['pt-BR', 'en'],
  about: [
    { '@type': 'Thing', name: 'Cryptocurrency taxation' },
    { '@type': 'Thing', name: 'Capital gains tax' },
    { '@type': 'Country', name: 'Brazil' },
  ],
};

const faqJsonLd = {
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  mainEntity: [
    {
      '@type': 'Question',
      name: 'Quanto de imposto pago sobre cripto no Brasil?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'A aliquota e de 15% sobre ganhos de capital para a maioria dos casos. Para ganhos acima de R$5 milhoes, a aliquota sobe progressivamente ate 22,5%. Vendas totais abaixo de R$35.000 por mes sao isentas de imposto.',
      },
    },
    {
      '@type': 'Question',
      name: 'Quando preciso pagar imposto sobre cripto?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Voce precisa pagar imposto quando suas vendas totais de criptomoedas no mes ultrapassam R$35.000 E voce teve lucro nas operacoes. O DARF deve ser pago ate o ultimo dia util do mes seguinte a venda.',
      },
    },
    {
      '@type': 'Question',
      name: 'Como declarar cripto no imposto de renda?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Use o programa GCAP da Receita Federal para calcular e gerar o DARF. Depois, importe os dados do GCAP para sua declaracao anual. Criptos acima de R$5.000 devem ser declaradas na ficha de Bens e Direitos.',
      },
    },
    {
      '@type': 'Question',
      name: 'O que e o limite de R$35.000?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Se o valor total das suas vendas de criptomoedas no mes for inferior a R$35.000, voce esta isento de pagar imposto sobre os ganhos, mesmo tendo lucro. Este limite e calculado sobre o valor de venda, nao sobre o lucro.',
      },
    },
    {
      '@type': 'Question',
      name: 'What is the crypto tax rate in Brazil?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Brazil taxes crypto capital gains at 15% for most cases. For gains exceeding R$5 million, rates progressively increase up to 22.5%. Monthly sales under R$35,000 are tax-exempt.',
      },
    },
    {
      '@type': 'Question',
      name: 'How do I pay crypto taxes in Brazil?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Use the GCAP program from Receita Federal to calculate your tax and generate a DARF (payment slip). The DARF must be paid by the last business day of the month following the sale.',
      },
    },
  ],
};

const howToJsonLd = {
  '@context': 'https://schema.org',
  '@type': 'HowTo',
  name: 'Como Calcular e Pagar Imposto sobre Cripto no Brasil',
  description: 'Guia passo a passo para calcular e pagar imposto sobre ganhos de capital com criptomoedas no Brasil.',
  totalTime: 'PT30M',
  tool: [
    { '@type': 'HowToTool', name: 'Programa GCAP da Receita Federal' },
    { '@type': 'HowToTool', name: 'Calculadora de Imposto Cripto' },
  ],
  step: [
    {
      '@type': 'HowToStep',
      name: 'Calcule o valor total de vendas do mes',
      text: 'Some todas as vendas de criptomoedas realizadas no mes. Se o total for menor que R$35.000, voce esta isento.',
    },
    {
      '@type': 'HowToStep',
      name: 'Calcule o ganho de capital',
      text: 'Subtraia o preco de compra (custo de aquisicao) do preco de venda para cada operacao com lucro.',
    },
    {
      '@type': 'HowToStep',
      name: 'Aplique a aliquota correta',
      text: 'Use 15% para ganhos ate R$5 milhoes. Aliquotas maiores se aplicam para ganhos superiores.',
    },
    {
      '@type': 'HowToStep',
      name: 'Gere o DARF no GCAP',
      text: 'Baixe o programa GCAP da Receita Federal, insira os dados das operacoes e gere o DARF.',
    },
    {
      '@type': 'HowToStep',
      name: 'Pague o DARF',
      text: 'Pague o DARF ate o ultimo dia util do mes seguinte a venda. Pode ser pago em bancos ou internet banking.',
    },
  ],
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(howToJsonLd) }}
      />
      {children}
    </>
  );
}
