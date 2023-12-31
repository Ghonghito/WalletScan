export const explorersList = [
  {
    id: 1,
    mainnet: true,
    rpc: 'https://eth.llamarpc.com',
    chain_id: '0x1',
    name: 'Etherscan',
    url: 'https://etherscan.io',
    chain: 'Ethereum',
    logo: 'https://etherscan.io/images/favicon3.ico',
    tags: ['Etheruem', 'Mainnet'],
    api_url: 'https://api.etherscan.io',
    api_key: process.env.ETHERSCAN_KEY,
  },
  {
    id: 5,
    mainnet: false,
    rpc: 'https://rpc.ankr.com/eth_goerli',
    chain_id: '0x5',
    name: 'Goerli Testnet',
    url: 'https://goerli.etherscan.io',
    chain: 'Ethereum',
    logo: 'https://etherscan.io/images/favicon3.ico',
    tags: ['Etheruem', 'Testnet', 'Goerli'],
    api_url: 'https://api-goerli.etherscan.io',
    api_key: process.env.ETHERSCAN_KEY,
  },
  {
    id: 11155111,
    mainnet: false,
    rpc: 'https://endpoints.omniatech.io/v1/eth/sepolia/public',
    chain_id: '0xaa36a7',
    name: 'Sepolia Testnet',
    url: 'https://sepolia.etherscan.io',
    chain: 'Ethereum',
    logo: 'https://etherscan.io/images/favicon3.ico',
    tags: ['Etheruem', 'Testnet', 'Sepolia'],
    api_url: 'https://api-sepolia.etherscan.io',
    api_key: process.env.ETHERSCAN_KEY,
  },
  {
    id: 56,
    mainnet: true,
    rpc: 'https://bsc-dataseed1.binance.org/',
    chain_id: '0x38',
    name: 'BNB Chain',
    url: 'https://bscscan.com',
    chain: 'BSC',
    logo: 'https://bscscan.com/images/favicon.ico',
    tags: ['BNB Chain', 'Mainnet'],
    api_url: 'https://api.bscscan.com',
    api_key: process.env.BSCSCAN_KEY,
  },
  {
    id: 97,
    mainnet: false,
    rpc: 'https://data-seed-prebsc-1-s3.binance.org:8545/',
    chain_id: '0x61',
    name: 'BNB Chain Testnet',
    url: 'https://testnet.bscscan.com',
    chain: 'BSC',
    logo: 'https://bscscan.com/images/favicon.ico',
    tags: ['BNB Chain', 'Testnet'],
    api_url: 'https://api-testnet.bscscan.com',
    api_key: process.env.BSCSCAN_KEY,
  },
  {
    id: 10,
    chain_id: '0xa',
    mainnet: true,
    rpc: 'https://endpoints.omniatech.io/v1/op/mainnet/public',
    name: 'Optimism',
    url: 'https://optimistic.etherscan.io',
    chain: 'Optimism',
    logo: 'https://optimistic.etherscan.io/images/favicon.ico',
    tags: ['Optimism', 'Mainnet'],
    api_url: 'https://api-optimistic.etherscan.io',
    api_key: process.env.OPTIMISM_KEY,
  },
  {
    id: 420,
    chain_id: '0x1a4',
    mainnet: false,
    rpc: 'https://optimism-goerli.public.blastapi.io	',
    name: 'Optimism Testnet',
    url: 'https://goerli-optimism.etherscan.io',
    chain: 'Optimism Goerli',
    logo: 'https://optimistic.etherscan.io/images/favicon.ico',
    tags: ['Optimism', 'Testnet'],
    api_url: 'https://api-goerli-optimism.etherscan.io',
    api_key: process.env.OPTIMISM_KEY,
  },
  {
    id: 42161,
    chain_id: '0xa4b1',
    mainnet: true,
    rpc: 'https://arb1.arbitrum.io/rpc',
    name: 'Arbitrum One',
    url: 'https://arbiscan.io',
    chain: 'Arbitrum',
    logo: 'https://arbiscan.io/images/favicon.ico',
    tags: ['Arbitrum', 'Mainnet'],
    api_url: 'https://api.arbiscan.io',
    api_key: process.env.ARBITRUM_KEY,
  },
  {
    id: 421613,
    chain_id: '0x66eed',
    mainnet: false,
    rpc: 'https://goerli-rollup.arbitrum.io/rpc',
    name: 'Arbitrum One Testnet',
    url: 'https://goerli.arbiscan.io',
    chain: 'Arbitrum Goerli',
    logo: 'https://arbiscan.io/images/favicon.ico',
    tags: ['Arbitrum', 'Testnet'],
    api_url: 'https://api-goerli.arbiscan.io',
    api_key: process.env.ARBITRUM_KEY,
  },
  {
    id: 137,
    chain_id: '0x89',
    name: 'Polygon',
    mainnet: true,
    rpc: 'https://polygon.llamarpc.com',
    url: 'https://polygonscan.com',
    chain: 'Polygon',
    logo: 'https://polygonscan.com/images/favicon.ico',
    tags: ['Polygon', 'Mainnet'],
    api_url: 'https://api.polygonscan.com',
    api_key: process.env.POLYGON_KEY,
  },
  {
    id: 1101,
    chain_id: '0x44d',
    name: 'Polygon zkEVM',
    mainnet: true,
    rpc: 'https://zkevm-rpc.com',
    url: 'https://zkevm.polygonscan.com',
    chain: 'Polygon',
    logo: 'https://polygonscan.com/images/favicon.ico',
    tags: ['Polygon', 'Mainnet', 'zkEVM'],
    api_url: 'https://api-zkevm.polygonscan.com',
    api_key: process.env.POLYGON_KEY,
  },
  {
    id: 80001,
    chain_id: '0x13881',
    name: 'Polygon Testnet',
    mainnet: false,
    rpc: 'https://endpoints.omniatech.io/v1/matic/mumbai/public',
    url: 'https://mumbai.polygonscan.com',
    chain: 'Polygon',
    logo: 'https://polygonscan.com/images/favicon.ico',
    tags: ['Polygon', 'Testnet'],
    api_url: 'https://api-testnet.polygonscan.com',
    api_key: process.env.POLYGON_KEY,
  },
  {
    id: 1442,
    chain_id: '0x5a2',
    name: 'Polygon zkEVM Testnet',
    mainnet: false,
    rpc: 'https://rpc.public.zkevm-test.net',
    url: 'https://testnet-zkevm.polygonscan.com',
    chain: 'Polygon',
    logo: 'https://polygonscan.com/images/favicon.ico',
    tags: ['Polygon', 'Testnet', 'zkEVM'],
    api_url: 'https://api-testnet-zkevm.polygonscan.com',
    api_key: process.env.POLYGON_KEY,
  },
  {
    id: 43114,
    chain_id: '0xa86a',
    mainnet: true,
    rpc: 'https://api.avax.network/ext/bc/C/rpc',
    name: 'Avalanche',
    url: 'https://snowtrace.io',
    chain: 'Avalanache',
    logo: 'https://snowtrace.io/images/favicon.ico',
    tags: ['Avalanche', 'Mainnet'],
    api_url: 'https://api.snowtrace.io',
    api_key: process.env.SNOWTRACE_KEY,
  },
  {
    id: 43113,
    chain_id: '0xa869',
    mainnet: false,
    rpc: 'https://api.avax-test.network/ext/bc/C/rpc',
    name: 'Avalanche Testnet',
    url: 'https://testnet.snowtrace.io',
    chain: 'Avalanache',
    logo: 'https://snowtrace.io/images/favicon.ico',
    tags: ['Avalanche', 'Testnet'],
    api_url: 'https://api-testnet.snowtrace.io',
    api_key: process.env.SNOWTRACE_KEY,
  },
  {
    id: 250,
    chain_id: '0xfa',
    name: 'Fantom',
    mainnet: true,
    rpc: 'https://rpcapi.fantom.network',
    url: 'https://ftmscan.com',
    chain: 'Fantom',
    logo: 'https://ftmscan.com/images/favicon.png',
    tags: ['Fantom', 'Mainnet'],
    api_url: 'https://api.ftmscan.com',
    api_key: process.env.FTMSCAN_KEY,
  },
  {
    id: 4002,
    chain_id: '0xfa2',
    name: 'Fantom Testnet',
    mainnet: false,
    rpc: 'https://rpc.testnet.fantom.network/',
    url: 'https://testnet.ftmscan.com',
    chain: 'Fantom',
    logo: 'https://ftmscan.com/images/favicon.png',
    tags: ['Fantom', 'Testnet'],
    api_url: 'https://api-testnet.ftmscan.com',
    api_key: process.env.FTMSCAN_KEY,
  },
  {
    id: 25,
    chain_id: '0x19',
    name: 'Cronos',
    url: 'https://cronoscan.com',
    mainnet: true,
    rpc: 'https://evm.cronos.org',
    chain: 'Cronos',
    logo: 'https://cronoscan.com/images/favicon.png',
    tags: ['Cronos', 'Mainnet'],
    api_url: 'https://api.cronoscan.com',
    api_key: process.env.CRONOSCAN_KEY,
  },
  {
    id: 8453,
    chain_id: '0x2105',
    name: 'BaseScan',
    mainnet: false,
    rpc: 'https://developer-access-mainnet.base.org',
    url: 'https://basescan.org/',
    chain: 'Base',
    logo: 'https://goerli.basescan.org/images/favicon.ico',
    tags: ['Base', 'Mainnet'],
    api_url: 'https://api.basescan.org',
  },
  {
    id: 84531,
    chain_id: '0x14a33',
    name: 'BaseScan Testnet',
    mainnet: false,
    rpc: 'https://goerli.base.org',
    url: 'https://goerli.basescan.org',
    chain: 'Base',
    logo: 'https://goerli.basescan.org/images/favicon.ico',
    tags: ['Base', 'Testnet'],
    api_url: 'https://api-goerli.basescan.org',
  },
  {
    id: 59144,
    chain_id: '0xe708',
    name: 'LineaScan',
    mainnet: true,
    rpc: 'https://rpc.linea.build',
    url: 'https://lineascan.build',
    chain: 'Linea',
    logo: 'https://lineascan.build/images/favicon.ico',
    tags: ['Linea', 'Mainnet'],
    api_url: 'https://api.lineascan.build',
  },
  {
    id: 59140,
    chain_id: '0xe704',
    name: 'Linea Testnet',
    mainnet: false,
    rpc: 'https://rpc.goerli.linea.build',
    url: 'https://goerli.lineascan.build',
    chain: 'Linea',
    logo: 'https://goerli.lineascan.build/images/favicon.ico',
    tags: ['Linea', 'Testnet'],
    api_url: 'https://api-testnet.lineascan.build',
  },
]
