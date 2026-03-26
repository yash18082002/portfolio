import type { Metadata } from 'next'
import { Analytics } from '@vercel/analytics/react'
import { SpeedInsights } from '@vercel/speed-insights/next'
import './globals.css'

export const metadata: Metadata = {
  title: 'Yash Agarwal | Software Engineer',
  description: 'Software Engineer who builds scalable systems and AI-powered tools that actually work',
  keywords: ['Software Engineer', 'Full Stack Developer', 'AI', 'Distributed Systems', 'Cloud Architecture'],
  authors: [{ name: 'Yash Agarwal' }],
  openGraph: {
    title: 'Yash Agarwal | Software Engineer',
    description: 'Software Engineer who builds scalable systems and AI-powered tools that actually work',
    type: 'website',
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" data-theme="dark" suppressHydrationWarning>
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link 
          href="https://fonts.googleapis.com/css2?family=DM+Sans:ital,wght@0,400;0,500;0,600;0,700&family=Playfair+Display:ital,wght@0,400;0,500;0,600;1,400;1,500&family=JetBrains+Mono:wght@400;500;600&display=swap" 
          rel="stylesheet" 
        />
        <link rel="icon" id="favicon" href="/favicon-dark.svg" type="image/svg+xml" />
      </head>
      <body>
        {children}
        <Analytics />
        <SpeedInsights />
      </body>
    </html>
  )
}
