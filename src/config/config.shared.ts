const parseBool = (value: string) => {
  return value === 'true';
};

export const getConfig = () => ({
  provider_ethereum_wss_url:
    process.env.PROVIDER_ETHEREUM_WSS_URL ||
    'wss://ethereum-rpc.publicnode.com',
    // 'wss://ethereum-rpc.publicnode.com'
  provider_arbitrum_wss_url:
    process.env.PROVIDER_ARBITRUM_WSS_URL ||
    'wss://arbitrum-one-rpc.publicnode.com',
    // 'wss://arbitrum-one-rpc.publicnode.com'
  provider_base_wss_url:
    process.env.PROVIDER_BASE_WSS_URL ||
    'wss://base-rpc.publicnode.com',
    // 'https://base-rpc.publicnode.com'
  provider_optimism_wss_url:
    process.env.PROVIDER_OPTIMISM_WSS_URL ||
    'wss://optimism-rpc.publicnode.com',
    // 'wss://optimism-rpc.publicnode.com'
  provider_blast_wss_url:
    process.env.PROVIDER_BLAST_WSS_URL ||
    'wss://blast-rpc.publicnode.com',
    // 'wss://blast-rpc.publicnode.com'
  provider_gnosis_wss_url:
    process.env.PROVIDER_GNOSIS_WSS_URL ||
    'wss://gnosis-rpc.publicnode.com',
    // 'wss://gnosis-rpc.publicnode.com'
  provider_fantom_wss_url:
    process.env.PROVIDER_FANTOM_WSS_URL ||
    'wss://fantom-rpc.publicnode.com',
    // 'wss://fantom-rpc.publicnode.com'
  provider_avalanche_wss_url:
    process.env.PROVIDER_AVALANCHE_WSS_URL ||
    'wss://avalanche-c-chain-rpc.publicnode.com',
    // 'wss://avalanche-c-chain-rpc.publicnode.com'
  provider_binance_wss_url:
    process.env.PROVIDER_BINANCE_WSS_URL ||
    'wss://bsc-rpc.publicnode.com',
    // 'wss://bsc-rpc.publicnode.com'
  provider_polygon_wss_url:
    process.env.PROVIDER_POLYGON_WSS_URL ||
    'wss://polygon-bor-rpc.publicnode.com',
    // 'wss://polygon-bor-rpc.publicnode.com'
  cache_to_skip_mode:
    parseBool(process.env.CACHE_TO_SKIP_MODE || 'false')
});
