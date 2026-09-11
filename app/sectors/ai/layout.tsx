import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Growl AI — Autonomous Agents & Enterprise Intelligence',
  description: 'Deploy production autonomous AI agents, intelligent workflow automation, and proprietary enterprise model fine-tuning built to solve real commercial bottlenecks.',
  alternates: {
    canonical: 'https://www.growl.cloud/sectors/ai',
  },
  openGraph: {
    title: 'Growl AI — Autonomous Agents & Enterprise Intelligence | Growl Co.',
    description: 'Deploy production autonomous AI agents, intelligent workflow automation, and fine-tuning.',
    url: 'https://www.growl.cloud/sectors/ai',
  },
}

export default function AISectorLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>
}
