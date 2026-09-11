import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Growl Cybersecurity & System Integrator',
  description: 'Military-grade cyber defense, Zero Trust architecture, SIEM/SOC operations, enterprise regulatory compliance, and mission-critical systems integration.',
  alternates: {
    canonical: 'https://www.growl.cloud/sectors/system-integrator-cybersecurity',
  },
  openGraph: {
    title: 'Growl Cybersecurity & System Integrator | Growl Co.',
    description: 'Military-grade cyber defense, Zero Trust architecture, SIEM/SOC operations, and systems integration.',
    url: 'https://www.growl.cloud/sectors/system-integrator-cybersecurity',
  },
}

export default function CybersecuritySectorLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>
}
