import type { Metadata } from 'next'
import './globals.css'

export const metadata: Metadata = {
  title: 'Gautham Manuru Prabhu — AI Engineer & ML Researcher',
  description:
    'Software Engineer 2 at Cisco Systems building agentic AI for supply chain operations. Research associate at MiCoSys Lab, San José State University. Six peer-reviewed publications.',
  keywords: [
    'Gautham Manuru Prabhu',
    'AI Engineer',
    'Machine Learning',
    'Cisco',
    'Agentic AI',
    'LLM',
    'RAG',
    'Graph Neural Networks',
  ],
  authors: [{ name: 'Gautham Manuru Prabhu' }],
  openGraph: {
    title: 'Gautham Manuru Prabhu — AI Engineer & ML Researcher',
    description:
      'Agentic AI in production at Cisco. Temporal graph learning at San José State. Six peer-reviewed publications.',
    type: 'website',
    locale: 'en_US',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Gautham Manuru Prabhu — AI Engineer & ML Researcher',
  },
  robots: { index: true, follow: true },
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
      </head>
      <body>{children}</body>
    </html>
  )
}
