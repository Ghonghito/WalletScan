'use client'
import axios from 'axios'

export const getActiveChains = async (walletAddress: string) => {
  const data = await axios
    .get(`/api/scan?address=${walletAddress}`)
    .then((response) => response)
    .catch((error) => error.response)

  if (data.status === 200) {
    return { status: 200, data: data.data }
  } else {
    return { status: 404, data: [] }
  }
}
