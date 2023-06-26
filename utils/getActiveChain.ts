import { ethers } from 'ethers'
import axios from 'axios'
import { explorersList } from '@/explorers'

const ETH_RPC = new ethers.JsonRpcProvider('https://eth.llamarpc.com')
const ETH_GOERLI_RPC = new ethers.JsonRpcProvider('https://rpc.ankr.com/eth_goerli')
const ETH_SEPOLIA_RPC = new ethers.JsonRpcProvider('https://endpoints.omniatech.io/v1/eth/sepolia/public')
const BSC_RPC = new ethers.JsonRpcProvider('https://bsc-dataseed1.binance.org/')
const OP_RPC = new ethers.JsonRpcProvider('https://mainnet.optimism.io/')
const ARB_RPC = new ethers.JsonRpcProvider('https://arb1.arbitrum.io/rpc')

export const getActiveChainsMoralis = async (walletAddress: string) => {
  const json = await axios(
    `https://deep-index.moralis.io/api/v2/wallets/${walletAddress}/chains?chains%5B0%5D=0x1&chains%5B1%5D=0x89&chains%5B2%5D=0x38&chains%5B3%5D=0xa86a&chains%5B4%5D=0xfa&chains%5B5%5D=0x2a15c308d&chains%5B6%5D=0x19&chains%5B7%5D=0xa4b1`,
    {
      headers: {
        'X-API-Key': process.env.NEXT_PUBLIC_MORALIS_API_KEY,
      },
    }
  )
    .then((response) => response)
    .catch((error) => error.response)

  let activeChains: any = []

  if (json.status === 200) {
    json.data.active_chains.forEach((x: any) => {
      if (x.first_transaction !== null && x.last_transaction !== null) {
        activeChains.push(x)
      }
    })
  }

  if (activeChains.length > 0) {
    explorersList.forEach((x: any, number) => {
      activeChains.forEach((y: any, index: number) => {
        if (x.chain_id === y.chain_id) {
          activeChains[index].chainData = x
          activeChains[index].isActive = true
        }
      })
    })
  }

  console.log(activeChains)

  return activeChains
}
