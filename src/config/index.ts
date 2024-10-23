import { getConfig } from './config.shared';

const getConf = () => {
  return getConfig();
};

export type Config = ReturnType<typeof getConf>;
export const config: Config = getConf();

export const chainConfigs: { [key: number]: string } = {
  1: 'ethereum',
  8453: 'base',
  10: 'optimism',
  42161: 'arbitrum',
  43114: 'avalanche',
  56: 'binance',
  81457: 'blast',
  250: 'fantom',
  100: 'gnosis',
  137: 'polygon',
};
