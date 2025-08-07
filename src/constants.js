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
  base_sepolia: {
    chainId: '84532',
    chainName: 'Base Sepolia Testnet',
    nativeCurrency: {
      name: 'ETH',
      symbol: 'ETH',
      decimals: 18,
    },
    rpcUrls: ['https://sepolia.base.org'],
    blockExplorerUrls: ['https://sepolia-explorer.base.org'],
  },
  ethereum_sepolia: {
    chainId: '11155111',
    chainName: 'Sepolia',
    nativeCurrency: {
      name: 'SepoliaETH',
      symbol: 'SepoliaETH',
      decimals: 18,
    },
    rpcUrls: ['https://sepolia.infura.io'],
    blockExplorerUrls: ['https://sepolia.etherscan.io'],
  },
};

export const BRIDGED_TOKENS_CONFIGS = {
  lyxt_base_sepolia: {
    address: '0xfa4CC098BF9cE6Aa30AA88aa2504bEd12C7fc35a',
    symbol: 'LYXt',
    decimals: 18,
    bridgeNetwork: BRIDGED_NETWORKS_CONFIGS.base_sepolia,
  },
  lyxt_ethereum_sepolia: {
    address: '0xDb0E2F2984eb8E57b9A1C008f7005338049a83dd',
    symbol: 'LYXt',
    decimals: 18,
    bridgeNetwork: BRIDGED_NETWORKS_CONFIGS.ethereum_sepolia,
  },
};
