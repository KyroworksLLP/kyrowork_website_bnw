import type { Metadata } from 'next'
import './globals.css'
import { ThemeProvider } from './components/ThemeProvider'

export const metadata: Metadata = {
  title: 'KyroWork — Starting Small, Dreaming Big | AI Solutions from Vizag',
  description: 'A young team of engineers with global experience, building AI tools to help startups and businesses launch faster and grow smarter. Based in Vizag, India.',
  keywords: 'KyroWork, SaaS, automation, AI, chatbot, WhatsApp, business tools, Vizag, India',
  authors: [{ name: 'KyroWork Technologies' }],
  creator: 'KyroWork Technologies',
  publisher: 'KyroWork Technologies',
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
  icons: {
    icon: '/favicon.png',
    apple: '/favicon.png',
  },
  openGraph: {
    title: 'KyroWork — Starting Small, Dreaming Big | AI Solutions from Vizag',
    description: 'A young team of engineers with global experience, building AI tools to help startups and businesses launch faster and grow smarter.',
    type: 'website',
    locale: 'en_US',
    siteName: 'KyroWork',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'KyroWork — Starting Small, Dreaming Big | AI Solutions from Vizag',
    description: 'A young team of engineers with global experience, building AI tools to help startups and businesses launch faster and grow smarter.',
  },
  viewport: {
    width: 'device-width',
    initialScale: 1,
    maximumScale: 5,
  },
  metadataBase: new URL('https://kyrowork.com'),
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body>
        <ThemeProvider>
          {children}
        </ThemeProvider>
      </body>
    </html>
  )
}

