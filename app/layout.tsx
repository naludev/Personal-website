import type { Metadata } from 'next'
import { Inter, JetBrains_Mono } from 'next/font/google'
import { Analytics } from '@vercel/analytics/next'
import { LanguageProvider } from '@/lib/language-context'
import './globals.css'

const inter = Inter({ 
  subsets: ["latin"],
  variable: '--font-inter'
})

const jetbrainsMono = JetBrains_Mono({ 
  subsets: ["latin"],
  variable: '--font-jetbrains'
})

export const metadata: Metadata = {
  title: 'Nalú Muñoz | Senior Software Engineer',
  description: 'Senior Software Engineer especializado en desarrollo Mobile & Fullstack. +4 años construyendo aplicaciones escalables con React y React Native.',
  keywords: ['Software Engineer', 'React', 'React Native', 'Mobile Developer', 'Fullstack', 'TypeScript', 'Next.js'],
  authors: [{ name: 'Nalú Muñoz' }],
  openGraph: {
    title: 'Nalú Muñoz | Senior Software Engineer',
    description: 'Senior Software Engineer especializado en desarrollo Mobile & Fullstack.',
    type: 'website',
  },
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="es" className={`${inter.variable} ${jetbrainsMono.variable} bg-background`}>
      <body className="font-sans antialiased">
        <LanguageProvider>
          {children}
        </LanguageProvider>
        {process.env.NODE_ENV === 'production' && <Analytics />}
      </body>
    </html>
  )
}
