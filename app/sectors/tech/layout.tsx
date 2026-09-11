import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Growl Tech — Cloud & Custom Software Engineering',
  description: 'Enterprise architecture, custom software development, distributed systems, and scalable cloud platforms engineered for resilient business execution.',
  alternates: {
    canonical: 'https://www.growl.cloud/sectors/tech',
  },
  openGraph: {
    title: 'Growl Tech — Cloud & Custom Software Engineering | Growl Co.',
    description: 'Enterprise architecture, custom software development, and scalable cloud platforms.',
    url: 'https://www.growl.cloud/sectors/tech',
  },
}

export default function TechSectorLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>
}
