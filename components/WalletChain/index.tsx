import { explorersList } from '@/explorers'
import Image from 'next/image'
import React from 'react'
import Tag from './Tag'
import Link from 'next/link'

interface WalletChainTypes {
  walletAddress: string
  explorerName: string
  explorerLogo: string
  explorerURL: string
  tags: any
}

const WalletChain = ({ walletAddress, explorerName, explorerLogo, explorerURL, tags }: WalletChainTypes) => {
  return (
    <div>
      <div>
        <Link href={`${explorerURL}/address/${walletAddress}`} target='_blank' className='hover:underline decoration-[#5C87A0]'>
          <h3 className='text-[#327BFE] dark:text-[#5C87A0] font-medium'>{explorerName}</h3>
        </Link>
      </div>
      <div className='flex items-center gap-2 mt-2'>
        <Image src={explorerLogo} alt={explorersList[0].name} width='16' height='16' />
        <p className='text-[#a8a6a3] text-xs'>{`${explorerURL} > address > ${walletAddress}`}</p>
      </div>
      <div className='flex items-center mt-2 gap-2'>
        {tags.map((x: any, index: number) => (
          <Tag key={index + 1} title={x} />
        ))}
      </div>
    </div>
  )
}

export default WalletChain
