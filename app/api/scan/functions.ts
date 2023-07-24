import { explorersList } from '@/explorers'
import axios from 'axios'
import { ethers } from 'ethers'

export const getActiveChains = async (walletAddress: any) => {
  let activeChains = []

  for (const chain of explorersList) {
    const apiKey = chain.api_key || process.env.NEXT_PUBLIC_ETHERSCAN_KEY
    const provider = new ethers.JsonRpcProvider(chain.rpc)
    const balance = await provider.getBalance(walletAddress)
    if (Number(balance) !== 0) {
      activeChains.push({
        status: 200,
        chainData: chain,
        isActive: true,
      })
    } else {
      const nativeTxsResponse = await axios
        .get(`${chain.api_url}/api?module=account&action=txlist&address=${walletAddress}&startblock=0&endblock=99999999&page=1&offset=10&sort=asc&apikey=${apiKey}`)
        .then((response) => response)
        .catch((error) => error.response)

      if (nativeTxsResponse.status === 200 && nativeTxsResponse.data.result && nativeTxsResponse.data.result.length > 0 && nativeTxsResponse.data.message !== 'NOTOK') {
        activeChains.push({
          status: 200,
          chainData: chain,
          isActive: true,
        })
      } else {
        const tokenTxsResponse = await axios
          .get(`${chain.api_url}/api?module=account&action=tokentx&address=${walletAddress}&startblock=0&endblock=99999999&page=1&offset=10&sort=asc&apikey=${apiKey}`)
          .then((response) => response)
          .catch((error) => error.response)

        if (tokenTxsResponse.status === 200 && tokenTxsResponse.data.result && tokenTxsResponse.data.result.length > 0 && nativeTxsResponse.data.message !== 'NOTOK') {
          activeChains.push({
            status: 200,
            chainData: chain,
            isActive: true,
          })
        } else {
          const erc721TxsResponse = await axios
            .get(`${chain.api_url}/api?module=account&action=tokennfttx&address=${walletAddress}&startblock=0&endblock=99999999&page=1&offset=10&sort=asc&apikey=${apiKey}`)
            .then((response) => response)
            .catch((error) => error.response)

          if (erc721TxsResponse.status === 200 && erc721TxsResponse.data.result && erc721TxsResponse.data.result.length > 0 && nativeTxsResponse.data.message !== 'NOTOK') {
            activeChains.push({
              status: 200,
              chainData: chain,
              isActive: true,
            })
          }
        }
      }
    }
  }

  return activeChains
}
