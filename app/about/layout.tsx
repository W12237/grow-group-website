import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'About Growl Holding Group',
  description: 'Learn about Growl Co. — an integrated holding group operating across Tech, AI, Cybersecurity, Marketing, and Hub to help ambitious enterprises move from idea to scale.',
  alternates: {
    canonical: 'https://www.growl.cloud/about',
  },
  openGraph: {
    title: 'About Growl Holding Group | Growl Co.',
    description: 'Learn about Growl Co. — an integrated holding group operating across Tech, AI, Cybersecurity, Marketing, and Hub.',
    url: 'https://www.growl.cloud/about',
  },
}

export default function AboutLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>
}
