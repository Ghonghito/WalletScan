'use client'
import { useRouter } from 'next/navigation'
import SearchButton from '../SearchButton'

interface SearchBoxTypes {
  className?: string
  isSmall?: boolean
  value?: string
}

const SearchBox = ({ className = '', isSmall, value }: SearchBoxTypes) => {
  const router = useRouter()

  const handleNavigate = () => {
    const getWalletAddress = (document.getElementById('walletAddress') as HTMLInputElement).value
    console.log(getWalletAddress)
    router.push(`/address/${getWalletAddress}`)
  }

  return (
    <div className='w-full'>
      {!isSmall ? (
        <div className='flex items-center'>
          <input
            id='walletAddress'
            placeholder='Search for addresses and ENS names'
            className={`py-3 px-5 rounded-l-full bg-lightBackground dark:bg-[#052D48]  focus:outline-none text-black dark:text-[#A9BDC5] border dark:border-0 w-full${className}`}
          />
          <SearchButton onClick={() => handleNavigate()} />
        </div>
      ) : (
        <div>
          <div className='flex items-center'>
            <input id='walletAddress' className='py-2 px-5 rounded-l-full bg-lightBackground dark:bg-[#052D48] focus:outline-none text-black dark:text-[#A9BDC5] border dark:border-0 w-full' placeholder='Search for addresses and ENS names' />
            <div className='flex items-center pr-3 text-sm'>
              <SearchButton onClick={() => handleNavigate()} isSmall searchIcon />
            </div>
          </div>
        </div>
      )}
    </div>
  )
}

export default SearchBox
