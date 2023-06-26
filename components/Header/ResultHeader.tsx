import Link from 'next/link'
import React from 'react'
import SearchBox from '../SearchBox'
import DarkModeButton from '../DarkModeButton'

const ResultHeader = () => {
  return (
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
            <div className='hidden md:flex md:w-[550px]'>
              <SearchBox isSmall={true} />
            </div>
          </div>
          <DarkModeButton />
        </div>
      </div>
      <div className='flex md:hidden px-3 mt-2 w-full'>
        <SearchBox isSmall={true} />
      </div>
    </div>
  )
}

export default ResultHeader
