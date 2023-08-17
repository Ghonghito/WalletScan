import React from 'react'

const Logo = () => {
  return (
    <div className='flex gap-2 items-center justify-center'>
      <div className='w-[43px] h-[43px] bg-[#011E35] dark:bg-white flex items-center justify-center'>
        <h2 className='text-white dark:text-[#011E35] text-2xl font-bold'>W</h2>
      </div>
      <h2 className='text-[#011E35] dark:text-white text-3xl font-bold tracking-wider'>Walletscan</h2>
    </div>
  )
}

export default Logo
