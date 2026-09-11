import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Insights & Technical Research',
  description: 'Analysis, technical whitepapers, and operational perspectives on autonomous AI agents, enterprise security architecture, and high-performance digital scale.',
  alternates: {
    canonical: 'https://www.growl.cloud/insights',
  },
  openGraph: {
    title: 'Insights & Technical Research | Growl Co.',
    description: 'Analysis and technical whitepapers on AI agents, enterprise security architecture, and digital scale.',
    url: 'https://www.growl.cloud/insights',
  },
}

export default function InsightsLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>
}
