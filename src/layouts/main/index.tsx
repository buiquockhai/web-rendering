import type { PropsWithChildren } from 'react'
import { Inter } from '@next/font/google'

const inter = Inter({
  subsets: ['latin'],
  variable: '--font-inter',
})

export function Layout({ children }: PropsWithChildren) {
  return <main className={`${inter.variable} font-sans p-10`}>{children}</main>
}
