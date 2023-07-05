import Footer from '@/components/Footer'
import Header from '@/components/Header'
import './globals.css'

export const metadata = {
  title: 'WalletScan',
  description: 'Explore Decentralized Web',
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang='en'>
      <title>Explore Decentralized Web</title>
      <body className='flex justify-between flex-col min-h-screen bg-lightBackground dark:bg-darkBackground'>
        <Header />
        <div>{children}</div>
        <Footer />
      </body>
    </html>
  )
}
