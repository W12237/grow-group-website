import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Growl SaaS — Software Products for Rapid Business Scale',
  description: 'Turnkey vertical software platforms, subscription products, and modular business engines designed to replace complex project cycles with immediate utility.',
  alternates: {
    canonical: 'https://www.growl.cloud/sectors/saas',
  },
  openGraph: {
    title: 'Growl SaaS — Software Products for Rapid Business Scale | Growl Co.',
    description: 'Turnkey vertical software platforms and subscription products.',
    url: 'https://www.growl.cloud/sectors/saas',
  },
}

export default function SaasSectorLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>
}
