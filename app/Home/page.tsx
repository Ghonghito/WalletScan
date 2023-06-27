'use client'
import SearchBox from '@/components/SearchBox'

export default function Home() {
  return (
    <div className=''>
      <div className='flex flex-col items-center justify-center space-y-8 mb-52'>
        <div className='flex gap-2 items-center justify-center'>
          <div className='w-[43px] h-[43px] bg-[#011E35] dark:bg-white flex items-center justify-center'>
            <h2 className='text-white dark:text-[#011E35] text-2xl font-bold'>W</h2>
          </div>
          <h2 className='text-[#011E35] dark:text-white text-3xl font-bold tracking-wider'>Walletscan</h2>
        </div>
        <div className='w-full px-2 md:w-[560px] md:p-0'>
          <SearchBox />
        </div>
      </div>
    </div>
  )
}
