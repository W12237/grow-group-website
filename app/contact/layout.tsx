import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Start a Conversation — Enterprise Contact',
  description: 'Initiate a direct executive dialogue with Growl Co. Explore partnerships, procurement under a single master services agreement, or operational deployment.',
  alternates: {
    canonical: 'https://www.growl.cloud/contact',
  },
  openGraph: {
    title: 'Start a Conversation — Enterprise Contact | Growl Co.',
    description: 'Initiate a direct executive dialogue with Growl Co. Explore partnerships or deployment.',
    url: 'https://www.growl.cloud/contact',
  },
}

export default function ContactLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>
}
