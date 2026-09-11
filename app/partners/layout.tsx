import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Partners & Technology Ecosystem',
  description: 'Certified enterprise partnerships across hyperscale cloud providers, security leaders, AI foundations, and specialized hardware ecosystems.',
  alternates: {
    canonical: 'https://www.growl.cloud/partners',
  },
  openGraph: {
    title: 'Partners & Technology Ecosystem | Growl Co.',
    description: 'Certified enterprise partnerships across cloud providers, security leaders, and AI foundations.',
    url: 'https://www.growl.cloud/partners',
  },
}

export default function PartnersLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>
}
