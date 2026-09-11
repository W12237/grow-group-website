import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Growl Hub — Unified Cloud & Operations Ecosystem',
  description: 'Connect internal operations, distributed enterprise teams, ERP/CRM orchestration, and business automation into a unified single pane of glass.',
  alternates: {
    canonical: 'https://www.growl.cloud/sectors/hub',
  },
  openGraph: {
    title: 'Growl Hub — Unified Cloud & Operations Ecosystem | Growl Co.',
    description: 'Connect internal operations, ERP/CRM orchestration, and business automation.',
    url: 'https://www.growl.cloud/sectors/hub',
  },
}

export default function HubSectorLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>
}
