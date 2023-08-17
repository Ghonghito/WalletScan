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
      <body className='bg-lightBackground dark:bg-darkBackground flex flex-col min-h-screen'>
        <Header />
        <div className='flex-grow flex items-center justify-center'>
          <main>{children}</main>
        </div>
        <Footer />
      </body>
    </html>
  )
}
