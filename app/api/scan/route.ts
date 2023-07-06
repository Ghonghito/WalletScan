import { explorersList } from '@/explorers'
import { NextResponse } from 'next/server'
import { getActiveChains } from './functions'

export async function GET(req: Request) {
  const { searchParams } = new URL(req.url)
  const userAddress = searchParams.get('address')

  try {
    const data = await getActiveChains(userAddress)

    return NextResponse.json(data)
  } catch (error) {
    return NextResponse.json({ status: 404, error: 'Something went wrong' })
  }
}
