import React from "react"
import type { Metadata, Viewport } from 'next'
import { Instrument_Sans, Courier_Prime } from 'next/font/google'
import './globals.css'
import { LanguageProvider } from '@/components/language-context'

const instrumentSans = Instrument_Sans({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  variable: "--font-instrument-sans",
});

const courierPrime = Courier_Prime({
  weight: ["400", "700"],
  subsets: ["latin"],
  variable: "--font-courier-prime",
});

export const viewport: Viewport = {
  themeColor: "#000823",
  colorScheme: "dark light",
  width: "device-width",
  initialScale: 1,
}

export const metadata: Metadata = {
  metadataBase: new URL('https://www.growl.cloud'),
  title: {
    default: 'Growl Co. — One Group. Five Engines of Growth.',
    template: '%s | Growl Co.',
  },
  description: 'Growl is an enterprise technology holding group operating across five specialized sectors: Tech, AI, Cybersecurity & Systems, Marketing, and Cloud Hub. Moving ambitious businesses from idea to scale.',
  keywords: [
    'Growl Co',
    'Growl Holding Group',
    'growl.cloud',
    'technology holding company',
    'enterprise AI agents',
    'cybersecurity systems integrator',
    'custom software engineering',
    'cloud architecture',
    'SaaS acceleration',
    'marketing and brand execution',
    'Cairo enterprise tech',
    'MENA digital transformation',
    'شركة جرول',
    'مجموعة جرول القابضة',
    'الذكاء الاصطناعي المؤسسي',
    'الأمن السيبراني',
    'تكامل الأنظمة',
  ],
  authors: [{ name: 'Growl Co.', url: 'https://www.growl.cloud' }],
  creator: 'Growl Co.',
  publisher: 'Growl Co.',
  alternates: {
    canonical: 'https://www.growl.cloud',
  },
  openGraph: {
    title: 'Growl Co. — One Group. Five Engines of Growth.',
    description: 'Direct senior engineering, autonomous AI intelligence, enterprise cyber defense, cloud systems, and market-leading brand execution.',
    url: 'https://www.growl.cloud',
    siteName: 'Growl Co.',
    locale: 'en_US',
    alternateLocale: ['ar_EG'],
    type: 'website',
    images: [
      {
        url: 'https://www.growl.cloud/og-image.png',
        secureUrl: 'https://www.growl.cloud/og-image.png',
        width: 1200,
        height: 630,
        type: 'image/png',
        alt: 'Growl Co. — One Group. Five Engines of Growth.',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Growl Co. — One Group. Five Engines of Growth.',
    description: 'Direct senior engineering, autonomous AI intelligence, enterprise cyber defense, cloud systems, and market-leading brand execution.',
    images: ['https://www.growl.cloud/og-image.png'],
    creator: '@GrowlGroup',
    site: '@GrowlGroup',
  },
  icons: {
    icon: [
      { url: '/favicon.ico', sizes: 'any' },
      { url: '/icon.svg', type: 'image/svg+xml' },
      { url: '/favicon-32x32.png', type: 'image/png', sizes: '32x32' },
      { url: '/favicon-16x16.png', type: 'image/png', sizes: '16x16' },
    ],
    shortcut: '/favicon.ico',
    apple: [
      { url: '/apple-touch-icon.png', sizes: '180x180', type: 'image/png' },
    ],
    other: [
      {
        rel: 'apple-touch-icon-precomposed',
        url: '/apple-touch-icon.png',
      },
    ],
  },
  manifest: '/site.webmanifest',
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  category: 'technology',
}

const jsonLd = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "Organization",
      "@id": "https://www.growl.cloud/#organization",
      "name": "Growl Co.",
      "alternateName": "Growl Holding Group",
      "url": "https://www.growl.cloud",
      "logo": {
        "@type": "ImageObject",
        "url": "https://www.growl.cloud/icon-512.png",
        "width": 512,
        "height": 512,
      },
      "image": "https://www.growl.cloud/og-image.png",
      "description": "Growl is an enterprise technology holding group operating across five specialized sectors: Tech, AI, Cybersecurity & Systems, Marketing, and Cloud Hub.",
      "address": {
        "@type": "PostalAddress",
        "addressLocality": "Cairo",
        "addressCountry": "EG",
      },
      "sameAs": [
        "https://www.growl.cloud",
      ],
    },
    {
      "@type": "WebSite",
      "@id": "https://www.growl.cloud/#website",
      "url": "https://www.growl.cloud",
      "name": "Growl Co.",
      "description": "One Group. Five Engines of Growth.",
      "publisher": {
        "@id": "https://www.growl.cloud/#organization",
      },
    },
  ],
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en" className={`${instrumentSans.variable} ${courierPrime.variable}`} suppressHydrationWarning>
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </head>
      <body className="font-sans antialiased">
        <LanguageProvider>
          {children}
        </LanguageProvider>
      </body>
    </html>
  )
}
