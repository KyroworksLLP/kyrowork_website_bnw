import type { Metadata } from 'next'
import './globals.css'
import { ThemeProvider } from './components/ThemeProvider'

export const metadata: Metadata = {
  title: 'KyroWork — Starting Small, Dreaming Big | AI Solutions from Vizag',
  description: 'A young team of engineers with global experience, building AI tools to help startups and businesses launch faster and grow smarter. Based in Vizag, India.',
  keywords: 'KyroWork, SaaS, automation, AI, chatbot, WhatsApp, business tools, Vizag, India',
  icons: {
    icon: '/favicon.png',
    apple: '/favicon.png',
  },
  openGraph: {
    title: 'KyroWork — Starting Small, Dreaming Big | AI Solutions from Vizag',
    description: 'A young team of engineers with global experience, building AI tools to help startups and businesses launch faster and grow smarter.',
    type: 'website',
  },
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

