import './globals.css'
import type { Metadata } from 'next'
import { Inter, Nunito } from 'next/font/google'
import "@fortawesome/fontawesome-svg-core/styles.css";
import { config } from "@fortawesome/fontawesome-svg-core";
config.autoAddCss = false;

const sharpfont = Inter({ subsets: ['latin'] })
const mainfont = Nunito({ subsets: ['latin'] })
import Navbar from '@/components/navbar'

export const metadata: Metadata = {
  title: 'AI@MIT',
  description: "MIT's premier undergraduate artificial intelligence student organization."
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <head>
        <link rel="shortcut icon" href="icons/aim-icon-at.svg"  />
      </head>
      <body className={mainfont.className}>
        
        <Navbar/>
        {children}
        </body>
    </html>
  )
}
