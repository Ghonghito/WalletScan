const Tag = ({ title }: { title: string }) => {
  return (
    <div className='border border-lightBorder dark:border-darkBorder rounded-md py-1 px-3'>
      <p className='text-xs text-[#677788] dark:text-white'>{title}</p>
    </div>
  )
}

export default Tag
