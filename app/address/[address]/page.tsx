'use client'
import WalletChain from '@/components/WalletChain'
import { getActiveChains } from '@/utils/getActiveChain'
import { usePathname } from 'next/navigation'
import { useEffect, useState } from 'react'

export default function Page() {
  const [isLoading, setIsLoading] = useState<boolean>(true)
  const [walletData, setWalletData] = useState<any>([])
  const router = usePathname()
  const address = router.replace('/address/', '')

  useEffect(() => {
    const getData = async () => {
      setIsLoading(true)
      window.document.title = address
      const data = await getActiveChains(address)
      setWalletData(data)
      setIsLoading(false)
    }
    getData()
  }, [address])

  return (
    <div>
      {!isLoading ? (
        <div className='px-3 lg:px-48 mt-6 space-y-8 mb-5'>
          {Object.keys(walletData).length > 0 && (
            <div>
              {walletData.status === 200 ? (
                <div>
                  <div>
                    <div className='mb-4'>
                      <p className='text-xs text-[#B1B8BF]'>
                        Address <span className='font-bold'>{address}</span> found in {walletData.data.length} different chains.{' '}
                      </p>
                    </div>
                    <div className='space-y-8'>
                      {walletData.data.map((x: any, index: number) => (
                        <div key={index}>
                          <WalletChain walletAddress={address} explorerName={x.chainData.name} explorerLogo={x.chainData.logo} explorerURL={x.chainData.url} tags={x.chainData.tags} />
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              ) : (
                <div className='flex items-center justify-center'>
                  <p className='text-sm text-red-500'>API ERROR! Please trying again!</p>
                </div>
              )}
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
