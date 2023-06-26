import React, { HTMLAttributes } from 'react'
import { SearchIcon } from '../Icons'

interface SearchButtonTypes extends HTMLAttributes<HTMLButtonElement> {
  className?: string
  isSmall?: boolean
  searchIcon?: boolean
}

const SearchButton = ({ className = '', isSmall, searchIcon, onClick }: SearchButtonTypes) => {
  return (
    <div>
      {!isSmall ? (
        <button className='py-3 text-white bg-[#337AFE] px-5 rounded-r-full hover:shadow-md shadow-[#337AFE]' onClick={onClick}>
          Search
        </button>
      ) : (
        <button className='py-2 text-white bg-[#337AFE] px-5 rounded-r-full hover:shadow-md shadow-[#337AFE]' onClick={onClick}>
          {searchIcon ? (
            <div className='py-2'>
              <SearchIcon />
            </div>
          ) : (
            'Search'
          )}
        </button>
      )}
    </div>
  )
}

export default SearchButton
