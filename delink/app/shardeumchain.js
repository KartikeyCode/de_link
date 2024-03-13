import { defineChain } from 'viem'

export const shardeumdevnet = defineChain({
  id: 8082,
  name: 'Shardeum Dev Network',
  nativeCurrency: { name: 'Shardeum', symbol: 'SHM', decimals: 18 },
  rpcUrls: {
    default: { http: ['https://hackathon.shardeum.org/'] },
  },
  blockExplorers: {
    default: { name: 'Shardeum Explorer', url: 'https://explorer-hackathon.shardeum.org/' },
  }
})
