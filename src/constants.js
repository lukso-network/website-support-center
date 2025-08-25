export const LUKSO_NETWORK_CONFIGS = {
  mainnet: {
    chainId: '42',
    chainName: 'LUKSO',
    nativeCurrency: {
      name: 'LYX',
      symbol: 'LYX',
      decimals: 18,
    },
    rpcUrls: ['https://42.rpc.thirdweb.com'],
    blockExplorerUrls: ['https://explorer.execution.mainnet.lukso.network'],
  },
  testnet: {
    chainId: '4201',
    chainName: 'LUKSO Testnet',
    nativeCurrency: {
      name: 'LYXt',
      symbol: 'LYXt',
      decimals: 18,
    },
    rpcUrls: ['https://4201.rpc.thirdweb.com'],
    blockExplorerUrls: ['https://explorer.execution.testnet.lukso.network'],
  },
};

export const BRIDGED_NETWORKS_CONFIGS = {
  ethereum_mainnet: {
    chainId: '1',
    chainName: 'Ethereum',
    nativeCurrency: {
      name: 'ETH',
      symbol: 'ETH',
      decimals: 18,
    },
    rpcUrls: ['https://eth.llamarpc.com'],
    blockExplorerUrls: ['https://etherscan.io'],
  },
};

export const BRIDGED_TOKENS_CONFIGS = {
  lyx_ethereum_mainnet: {
    address: '0xC210B2cB65ed3484892167F5e05F7ab496Ab0598',
    symbol: 'LYX',
    decimals: 18,
    bridgeNetwork: BRIDGED_NETWORKS_CONFIGS.ethereum_mainnet,
  },
};
