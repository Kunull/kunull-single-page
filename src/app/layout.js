import localFont from 'next/font/local'
import './globals.css'

const myFont = localFont({ src: '/public/assets/fonts/VCROSDMono.woff2' })

export const metadata = {
  title: 'Create Next App',
  description: 'Generated by create next app',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={myFont.className}>{children}</body>
    </html>
  )
}
