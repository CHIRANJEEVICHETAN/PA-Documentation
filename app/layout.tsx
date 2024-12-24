import './globals.css'
import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import { ThemeProvider } from "@/components/theme-provider"
import { Navigation } from "@/components/navigation"

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'ParrotAnalyzer Documentation',
  description: 'Advanced workforce management solution documentation',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={inter.className}>
        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
          disableTransitionOnChange
        >
          <div className="flex min-h-screen flex-col lg:flex-row">
            <Navigation />
            <main className="flex-1 lg:pl-[300px]">
              {children}
            </main>
          </div>
        </ThemeProvider>
      </body>
    </html>
  )
}