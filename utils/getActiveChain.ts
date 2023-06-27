import { explorersList } from '@/explorers'
import axios from 'axios'

export const getActiveChainsMoralis = async (walletAddress: string) => {
  const json = await axios(
    `https://deep-index.moralis.io/api/v2/wallets/${walletAddress}/chains?chains%5B0%5D=0x1&chains%5B1%5D=0x89&chains%5B2%5D=0x38&chains%5B3%5D=0xa86a&chains%5B4%5D=0xfa&chains%5B5%5D=0x2a15c308d&chains%5B6%5D=0x19&chains%5B7%5D=0xa4b1`,
    {
      headers: {
        'X-API-Key':
          'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJub25jZSI6IjRjNjZmMjY3LWZlZDMtNGM0Yi05ZGQ1LTdlYzc2YmYwYmFmMyIsIm9yZ0lkIjoiMzQ1MzkwIiwidXNlcklkIjoiMzU1MDUxIiwidHlwZUlkIjoiNjM0MTA1NGItMzk5OS00YTVmLWFiMWUtOTE0ZmUxNTc1NTc1IiwidHlwZSI6IlBST0pFQ1QiLCJpYXQiOjE2ODc3ODQzODksImV4cCI6NDg0MzU0NDM4OX0.rcmz8-synBys9wB5_xT9Y601t-UqOFoUWQGGJqIxulw',
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
  return activeChains
}

export const getActiveChains = async (walletAddress: string) => {
  let activeChains = []

  for (const chain of explorersList) {
    const nativeTxs = await axios
      .get(`${chain.api_url}/api?module=account&action=txlist&address=${walletAddress}&startblock=0&endblock=99999999&page=1&offset=10&sort=asc&apikey=${chain.api_key ? chain.api_key : process.env.NEXT_PUBLIC_ETHERSCAN_KEY}`)
      .then((response) => response)
      .catch((error) => error.response)

    if (nativeTxs.status === 200) {
      if (nativeTxs.data.message !== 'No transactions found' && Object.keys(nativeTxs.data.result).length > 0) {
        activeChains.push({
          status: 200,
          chainData: chain,
          isActive: nativeTxs.data.result.length > 0,
        })
      } else {
        const tokenTxs = await axios
          .get(`${chain.api_url}/api?module=account&action=tokentx&address=${walletAddress}&startblock=0&endblock=99999999&page=1&offset=10&sort=asc&apikey=${chain.api_key ? chain.api_key : process.env.NEXT_PUBLIC_ETHERSCAN_KEY}`)
          .then((response) => response)
          .catch((error) => error.response)

        if (nativeTxs.status === 200) {
          if (tokenTxs.data.message !== 'No transactions found' && Object.keys(nativeTxs.data.result).length > 0) {
            activeChains.push({
              status: 200,
              chainData: chain,
              isActive: tokenTxs.data.result.length > 0,
            })
          }
        } else {
          const erc721Txs = await axios
            .get(`${chain.api_url}/api?module=account&action=tokennfttx&address=${walletAddress}&startblock=0&endblock=99999999&page=1&offset=10&sort=asc&apikey=${chain.api_key ? chain.api_key : process.env.NEXT_PUBLIC_ETHERSCAN_KEY}`)
            .then((response) => response)
            .catch((error) => error.response)

          if (erc721Txs.status === 200) {
            if (erc721Txs.data.message !== 'No transactions found' && Object.keys(erc721Txs.data.result).length > 0) {
              activeChains.push({
                status: 200,
                chainData: chain,
                isActive: tokenTxs.data.result.length > 0,
              })
            }
          }
        }
      }
    }
  }

  console.log(activeChains)
  return activeChains
}
