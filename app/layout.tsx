import './globals.css'
import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'HabitDaily - Transform Your Habits',
  description: 'Build better habits with HabitDaily, the elegant habit tracking app',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  )
}