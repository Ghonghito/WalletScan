import Header from '@/components/Header'
import './globals.css'

export const metadata = {
  title: 'Explore Decentralized Web',
  description: 'Explore Decentralized Web',
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang='en'>
      <body className='bg-lightBackground dark:bg-darkBackground h-screen'>{children}</body>
    </html>
  )
}
