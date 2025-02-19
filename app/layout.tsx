import './globals.css'
import { Inter } from 'next/font/google'
import StarsCanvas from "./components/Background/Background"
import Nav from './components/Nav/Nav'
const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: 'Rise Digital',
  description: 'Rise Digital',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={`${inter.className} bg-[#030014] overflow-y-scroll overflow-x-hidden`}>
        <StarsCanvas />
        {children}
      </body>
    </html>
  )
}
