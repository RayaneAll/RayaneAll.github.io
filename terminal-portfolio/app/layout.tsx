import type React from "react"
import type { Metadata } from "next"
import { GeistSans } from "geist/font/sans"
import { GeistMono } from "geist/font/mono"
import { Analytics } from "@vercel/analytics/next"
import { Toaster } from "@/components/ui/toaster"
import { Suspense } from "react"
import "./globals.css"

export const metadata: Metadata = {
  title: "Portfolio Terminal | Développeur Full-Stack",
  description: "Portfolio professionnel avec style terminal - Démonstration des compétences RNCP en développement web",
  keywords: ["portfolio", "développeur", "full-stack", "web", "RNCP", "terminal"],
  authors: [{ name: "Votre Nom" }],
  creator: "Votre Nom",
  openGraph: {
    type: "website",
    locale: "fr_FR",
    title: "Portfolio Terminal | Développeur Full-Stack",
    description: "Portfolio professionnel avec style terminal",
  },
    generator: 'v0.app'
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="fr" className="scroll-smooth">
      <body className={`font-mono ${GeistSans.variable} ${GeistMono.variable} antialiased`}>
        <Suspense fallback={null}>
          {children}
          <Toaster />
        </Suspense>
        <Analytics />
      </body>
    </html>
  )
}
