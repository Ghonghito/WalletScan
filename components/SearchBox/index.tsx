'use client'
import { useRouter } from 'next/navigation'
import { SearchIcon } from '../Icons'

interface SearchBoxTypes {
  className?: string
  isSmall?: boolean
  value?: string | any
}

const SearchBox = ({ className = '', isSmall, value }: SearchBoxTypes) => {
  const router = useRouter()

  const handleNavigate = () => {
    const getWalletAddress = (document.getElementById('walletAddress') as HTMLInputElement).value
    router.push(`/address/${getWalletAddress}`)
  }

  return (
    <div className='w-full'>
      {!isSmall ? (
        <div className='flex'>
          <input
            id='walletAddress'
            placeholder='Search for addresses'
            className={`w-full h-[51px] px-5 rounded-l-3xl bg-lightBackground dark:bg-[#052D48] text-sm focus:outline-none focus:bg-transparent text-black dark:text-[#A9BDC5] border dark:border-0 ${className}`}
          />
          <button className='py-2 text-white bg-[#337AFE] px-5 rounded-r-3xl hover:shadow-md shadow-[#337AFE] text-sm' onClick={() => handleNavigate()}>
            {isSmall ? (
              <div className=''>
                <SearchIcon className='w-3 h-3' />
              </div>
            ) : (
              <div>
                <div className='hidden md:flex'>Search</div>
                <div className='flex md:hidden'>
                  <SearchIcon className='w-4 h-4' />
                </div>
              </div>
            )}
          </button>
        </div>
      ) : (
        <div>
          <div className='flex'>
            <input
              defaultValue={value}
              id='walletAddress'
              className='h-[43px] pl-5 rounded-l-3xl bg-lightBackground dark:bg-[#052D48] focus:outline-none text-sm text-black dark:text-[#A9BDC5] border dark:border-0 w-full'
              placeholder='Search for addresses and ENS names'
            />
            <button className='py-2 text-white bg-[#337AFE] px-5 rounded-r-3xl hover:shadow-md shadow-[#337AFE]' onClick={() => handleNavigate()}>
              {isSmall ? (
                <div className=''>
                  <SearchIcon className='w-3 h-3' />
                </div>
              ) : (
                'Search'
              )}
            </button>
          </div>
        </div>
      )}
    </div>
  )
}

export default SearchBox
