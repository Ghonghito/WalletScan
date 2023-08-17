'use client'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { useEffect, useState } from 'react'
import DarkModeButton from '../DarkModeButton'
import SearchBox from '../SearchBox'

const Header = () => {
  const [isResult, setIsResult] = useState<boolean>(false)
  const [walletAddress, setWalletAddress] = useState<string>('')
  const router = usePathname()
  const hidden = router.startsWith('/address/')

  useEffect(() => {
    if (hidden) {
      setIsResult(true)
      const address = router.replace('/address/', '')
      setWalletAddress(address)
    } else {
      setIsResult(false)
    }
  }, [hidden])

  return (
    <div>
      {isResult ? (
        <div>
          <div className='border-b border-lightBorder dark:border-darkBorder'>
            <div className='flex items-center justify-between p-3'>
              <div className='flex items-center gap-9'>
                <Link href='/'>
                  <div className='flex gap-2 items-center'>
                    <div className='w-[23px] h-[23px] bg-[#011E35] dark:bg-white flex items-center justify-center'>
                      <h2 className='text-white dark:text-[#011E35] text-base font-bold'>W</h2>
                    </div>
                    <h2 className='text-[#011E35] dark:text-white text-base font-bold tracking-wider'>Walletscan</h2>
                  </div>
                </Link>
                <div className='hidden md:flex md:w-[500px]'>
                  <SearchBox isSmall={true} value={walletAddress} />
                </div>
              </div>
              <DarkModeButton />
            </div>
          </div>
          <div className='flex md:hidden px-3 mt-2 w-full'>
            <SearchBox value={walletAddress} isSmall={true} />
          </div>
        </div>
      ) : (
        <div>
          <div className='flex justify-end p-3'>
            <DarkModeButton />
          </div>
        </div>
      )}
    </div>
  )
}

export default Header
