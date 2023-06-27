'use client'
import Footer from '@/components/Footer'
import Header from '@/components/Header'
import { usePathname } from 'next/navigation'
import './globals.css'

export const metadata = {
  title: 'Explore Decentralized Web',
  description: 'Explore Decentralized Web',
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  const router = usePathname()
  const hidden = router.startsWith('/address/')
  return (
    <html lang='en'>
      <body className='flex justify-between flex-col min-h-screen bg-lightBackground dark:bg-darkBackground'>
        {!hidden && <Header />}
        <div>{children}</div>
        <Footer />
      </body>
    </html>
  )
}
