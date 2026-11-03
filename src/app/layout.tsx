import type { Metadata } from 'next'
import './globals.css'

export const metadata: Metadata = {
  title: 'Gautham Manuru Prabhu · Software Engineer, Hardware Test',
  description:
    'Software Engineer II at Cisco. Built an agentic test-triage platform over 3.5M+ manufacturing test records from switches, routers, line cards and ASIC-based boards. It reads FCT, ICT, JTAG and burn-in logs and root-causes about 70% of previously undiagnosed failures.',
  keywords: [
    'Gautham Manuru Prabhu',
    'Hardware Test',
    'Manufacturing Test',
    'FCT',
    'ICT',
    'JTAG',
    'Boundary Scan',
    'Burn-in',
    'ASIC',
    'NPI',
    'Automated Optical Inspection',
    'Failure Analysis',
    'Embedded Systems',
    'Computer Architecture',
    'Computer Engineering',
    'Cisco',
    'Agentic AI',
  ],
  authors: [{ name: 'Gautham Manuru Prabhu' }],
  openGraph: {
    title: 'Gautham Manuru Prabhu · Software Engineer, Hardware Test',
    description:
      'Hardware test triage at Cisco over FCT, ICT, JTAG and burn-in logs. Automated optical inspection on assembly lines. First-author poster at Stanford\'s Graph Learning Workshop.',
    type: 'website',
    locale: 'en_US',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Gautham Manuru Prabhu · Software Engineer, Hardware Test',
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
