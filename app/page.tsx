import Logo from '@/components/Logo'
import SearchBox from '@/components/SearchBox'

const page = () => {
  return (
    <div className=''>
      <Logo />
      <div className='w-full md:w-[560px] mt-10'>
        <SearchBox />
      </div>
    </div>
  )
}

export default page
