'use client'
import ResultHeader from '@/components/Header/ResultHeader'
import WalletChain from '@/components/WalletChain'
import { getActiveChainsMoralis } from '@/utils/getActiveChain'
import { usePathname } from 'next/navigation'
import { useEffect, useState } from 'react'

export default function Page() {
  const [walletData, setWalletData] = useState<any>([])
  const router = usePathname()
  const address = router.replace('/address/', '')

  useEffect(() => {
    const testFoo = async () => {
      const test = await getActiveChainsMoralis(address)
      setWalletData(test)
    }
    testFoo()
  }, [address])

  return (
    <div>
      <ResultHeader />
      <div className='px-3 md:px-48 mt-6 space-y-8'>
        {walletData.length > 0 && (
          <div className='space-y-8'>
            {walletData.map((x: any, index: number) => (
              <div key={index}>
                <WalletChain walletAddress={address} explorerName={x.chainData.name} explorerLogo={x.chainData.logo} explorerURL={x.chainData.url} tags={x.chainData.tags} />
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  )
}
