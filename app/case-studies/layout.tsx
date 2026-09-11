import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Case Studies & Institutional Results',
  description: 'Audited case studies demonstrating real commercial outcomes, enterprise AI deployments, and cloud architectures built by Growl holding sectors.',
  alternates: {
    canonical: 'https://www.growl.cloud/case-studies',
  },
  openGraph: {
    title: 'Case Studies & Institutional Results | Growl Co.',
    description: 'Audited case studies demonstrating real commercial outcomes and enterprise AI deployments.',
    url: 'https://www.growl.cloud/case-studies',
  },
}

export default function CaseStudiesLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>
}
