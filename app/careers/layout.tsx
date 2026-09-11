import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Careers — Build With Us at Growl',
  description: 'Join top-tier engineers, systems architects, cybersecurity specialists, and commercial strategists across our five operational engines.',
  alternates: {
    canonical: 'https://www.growl.cloud/careers',
  },
  openGraph: {
    title: 'Careers — Build With Us at Growl | Growl Co.',
    description: 'Join top-tier engineers, systems architects, and commercial strategists across Growl.',
    url: 'https://www.growl.cloud/careers',
  },
}

export default function CareersLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>
}
