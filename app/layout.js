import './globals.css'

export const metadata = {
  title: 'My Tailwind App',
  description: 'Using Tailwind with Next.js App Router',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  )
}