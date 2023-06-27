'use client'
import Header from '@/components/Header'
import WalletChain from '@/components/WalletChain'
import { getActiveChains } from '@/utils/getActiveChain'
import { usePathname } from 'next/navigation'
import { useEffect, useState } from 'react'

export default function Page() {
  const [isLoading, setIsLoading] = useState<boolean>(Boolean)
  const [walletData, setWalletData] = useState<any>([])
  const router = usePathname()
  const address = router.replace('/address/', '')
  document.title = address
  useEffect(() => {
    const getData = async () => {
      setIsLoading(true)
      const data = await getActiveChains(address)
      setWalletData(data)
      setIsLoading(false)
    }
    getData()
  }, [address])

  return (
    <div>
      <Header isResult={true} walletAddress={address} />
      {!isLoading ? (
        <div className='px-3 lg:px-48 mt-6 space-y-8 mb-5'>
          {Object.keys(walletData).length > 0 && (
            <div>
              <div className='mb-4'>
                <p className='text-xs text-[#B1B8BF]'>
                  Address <span className='font-bold'>{address}</span> found in {walletData.length} different chains.{' '}
                </p>
              </div>
              <div className='space-y-8'>
                {walletData.map((x: any, index: number) => (
                  <div key={index}>
                    <WalletChain walletAddress={address} explorerName={x.chainData.name} explorerLogo={x.chainData.logo} explorerURL={x.chainData.url} tags={x.chainData.tags} />
                  </div>
                ))}
              </div>
            </div>
          )}
        </div>
      ) : (
        <div className='px-3 lg:px-48 mt-6 space-y-8'>
          <WalletChain isLoading={isLoading} />
        </div>
      )}
    </div>
  )
}
