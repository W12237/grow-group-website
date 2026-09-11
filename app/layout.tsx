import React from "react"
import type { Metadata } from 'next'
import { Instrument_Sans, Courier_Prime } from 'next/font/google'
import './globals.css'

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

export const metadata: Metadata = {
  title: 'Growl Co. — One Group. Five Engines of Growth.',
  description: 'Growl brings technology, intelligence, security, systems, brand, and product execution together to help ambitious businesses move from idea to scale.',
  keywords: ['Growl Co', 'holding company', 'technology', 'marketing', 'cybersecurity', 'AI', 'systems integration', 'SaaS', 'digital transformation'],
  authors: [{ name: 'Growl Co.' }],
  openGraph: {
    title: 'Growl Co. — One Group. Five Engines of Growth.',
    description: 'Growl brings technology, intelligence, security, systems, brand, and product execution together to help ambitious businesses move from idea to scale.',
    type: 'website',
    url: 'https://growl.co',
    siteName: 'Growl Co.',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Growl Co. — One Group. Five Engines of Growth.',
    description: 'Growl brings technology, intelligence, security, systems, brand, and product execution together to help ambitious businesses move from idea to scale.',
  },
  icons: {
    icon: '/growl-icons/growl-group-icon.png',
    shortcut: '/growl-icons/growl-group-icon.png',
    apple: '/growl-icons/growl-group-icon.png',
  },
}

import { LanguageProvider } from '@/components/language-context'

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en" className={`${instrumentSans.variable} ${courierPrime.variable}`} suppressHydrationWarning>
      <body className="font-sans antialiased">
        <LanguageProvider>
          {children}
        </LanguageProvider>
      </body>
    </html>
  )
}
