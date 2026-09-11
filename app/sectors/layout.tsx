import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'The Five Specialized Operating Sectors',
  description: 'Explore the 5 autonomous operating engines of Growl Co.: Tech, AI, System Integration & Cybersecurity, Marketing, and Cloud Hub.',
  alternates: {
    canonical: 'https://www.growl.cloud/sectors',
  },
  openGraph: {
    title: 'The Five Specialized Operating Sectors | Growl Co.',
    description: 'Explore the 5 autonomous operating engines of Growl Co.: Tech, AI, System Integration & Cybersecurity, Marketing, and Cloud Hub.',
    url: 'https://www.growl.cloud/sectors',
  },
}

export default function SectorsLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>
}
