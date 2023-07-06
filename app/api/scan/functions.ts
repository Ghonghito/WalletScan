import { explorersList } from '@/explorers'
import axios from 'axios'

export const getActiveChains = async (walletAddress: any) => {
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

  return activeChains
}
