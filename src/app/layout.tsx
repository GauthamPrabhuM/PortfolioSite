import type { Metadata } from 'next'
import './globals.css'

export const metadata: Metadata = {
  title: 'Gautham Manuru Prabhu · Software Engineer, Hardware Test & Manufacturing',
  description:
    'Software Engineer II at Cisco building AI for hardware test and manufacturing: triage of hardware test failures on factory lines and computer-vision inspection on assembly lines. Co-founded a student radio telescope project. Six peer-reviewed publications.',
  keywords: [
    'Gautham Manuru Prabhu',
    'AI Engineer',
    'Machine Learning',
    'Cisco',
    'Agentic AI',
    'Hardware Test',
    'Manufacturing',
    'Computer Vision',
    'Signal Processing',
    'LLM',
    'RAG',
    'Graph Neural Networks',
  ],
  authors: [{ name: 'Gautham Manuru Prabhu' }],
  openGraph: {
    title: 'Gautham Manuru Prabhu · Software Engineer, Hardware Test & Manufacturing',
    description:
      'Hardware test triage and assembly-line inspection at Cisco. Software-defined radio for a student radio telescope. First-author poster at the Stanford Graph Learning Workshop (SNAP) 2026.',
    type: 'website',
    locale: 'en_US',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Gautham Manuru Prabhu · Software Engineer, Hardware Test & Manufacturing',
  },
  robots: { index: true, follow: true },
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <script dangerouslySetInnerHTML={{ __html: "document.documentElement.classList.add('js')" }} />
      </head>
      <body>{children}</body>
    </html>
  )
}
