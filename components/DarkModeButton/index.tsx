'use client'
import React, { useEffect, useState } from 'react'
import { MoonIcon, SunIcon } from '@/components/Icons'

const DarkModeButton = () => {
  const [isDarkMode, setIsDarkMode] = useState(false)

  const toggleDarkMode = () => {
    const newMode = isDarkMode ? 'light' : 'dark'
    localStorage.setItem('darkMode', newMode)
    setIsDarkMode(!isDarkMode)
    if (newMode === 'dark') {
      document.documentElement.classList.add('dark')
    } else {
      document.documentElement.classList.remove('dark')
    }
  }

  useEffect(() => {
    const darkModeSet = localStorage.getItem('darkMode')
    if (darkModeSet === 'dark') {
      document.documentElement.classList.add('dark')
      setIsDarkMode(true)
    }
  }, [])

  return (
    <div onClick={() => toggleDarkMode()} className='group flex-shrink-0 rounded-full w-[43px] h-[43px] bg-[#E5E8EA] dark:bg-[#063C60] flex items-center justify-center hover:bg-[#011E35] dark:hover:bg-[#085A91] cursor-pointer'>
      {isDarkMode ? (
        <div className='w-6'>
          <SunIcon className='fill-[#bebebe] group-hover:fill-[#fff]' />
        </div>
      ) : (
        <div className='w-5'>
          <MoonIcon className='fill-[#011E35] group-hover:fill-[#fff]' />
        </div>
      )}
    </div>
  )
}

export default DarkModeButton
