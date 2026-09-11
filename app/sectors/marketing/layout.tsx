import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Growl Marketing & Branding — Market Authority at Scale',
  description: 'Full-funnel commercial growth, strategic brand architecture, performance marketing, high-converting creative engines, and institutional market authority.',
  alternates: {
    canonical: 'https://www.growl.cloud/sectors/marketing',
  },
  openGraph: {
    title: 'Growl Marketing & Branding — Market Authority at Scale | Growl Co.',
    description: 'Full-funnel commercial growth, strategic brand architecture, and performance marketing.',
    url: 'https://www.growl.cloud/sectors/marketing',
  },
}

export default function MarketingSectorLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>
}
