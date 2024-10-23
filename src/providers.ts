import { ethers } from 'ethers';
import { config } from './config';

export const ethereumProvider = new ethers.WebSocketProvider(config.provider_ethereum_wss_url);
export const arbitrumProvider = new ethers.WebSocketProvider(config.provider_arbitrum_wss_url);
export const baseProvider = new ethers.WebSocketProvider(config.provider_base_wss_url);
export const optimismProvider = new ethers.WebSocketProvider(config.provider_optimism_wss_url);
export const blastProvider = new ethers.WebSocketProvider(config.provider_blast_wss_url);
export const gnosisProvider = new ethers.WebSocketProvider(config.provider_gnosis_wss_url);
export const fantomProvider = new ethers.WebSocketProvider(config.provider_fantom_wss_url);
export const avalancheProvider = new ethers.WebSocketProvider(config.provider_avalanche_wss_url);
export const binanceProvider = new ethers.WebSocketProvider(config.provider_binance_wss_url);
export const polygonProvider = new ethers.WebSocketProvider(config.provider_polygon_wss_url);
