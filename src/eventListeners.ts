import { ethers } from 'ethers';
import { ethereumProvider, arbitrumProvider, baseProvider, optimismProvider, blastProvider, gnosisProvider, fantomProvider, avalancheProvider, binanceProvider, polygonProvider } from './providers';
import { isTracked } from './addressStorage';
import { chainConfigs, config } from './config';
import XCache from './xCache';

const ttlMinutes = 5;
const ttlMilliseconds = ttlMinutes * 60 * 1000;
const xCache = new XCache(ttlMilliseconds);
const cacheToSkipMode = config.cache_to_skip_mode;

function handleTransaction(tx: ethers.TransactionResponse) {
  const txFrom = tx.from.toLowerCase()
  const txTo = tx.to?.toLowerCase()
  if ((isTracked(txFrom) && !xCache.get(txFrom)) || (txTo && isTracked(txTo) && !xCache.get(txTo))) {
    let msg = `Tracked transaction: ${tx.hash} [METADATA: Block Number: ${tx.blockNumber}, ChainId: ${tx.chainId} (${chainConfigs[Number(tx.chainId)]})]`
    if (isTracked(txFrom) && !xCache.get(txFrom)) {
      msg += `\nTracked address (from): ${txFrom}`
      if (cacheToSkipMode) xCache.set(txFrom);
    } else if (txTo && isTracked(txTo) && !xCache.get(txTo)) {
      msg += `\nTracked address (to): ${txTo}`
      if (cacheToSkipMode) xCache.set(txTo);
    }
    console.log(msg)
  } else if ((isTracked(txFrom) && xCache.get(txFrom)) || (txTo && isTracked(txTo) && xCache.get(txTo))) {
    const msg = `Tracked address already cached. Skipping transaction: ${tx.hash} [METADATA: Block Number: ${tx.blockNumber}, ChainId: ${tx.chainId} (${chainConfigs[Number(tx.chainId)]})]`
    console.log(msg)
  }
}

function subscribeToNewBlocks(provider: ethers.WebSocketProvider) {
  provider.on('block', async (blockNumber) => {
    const block = await provider.getBlock(blockNumber, true);
    block?.prefetchedTransactions.forEach(handleTransaction);
  });
}

// Subscribe to new blocks for each provider
subscribeToNewBlocks(ethereumProvider);
subscribeToNewBlocks(arbitrumProvider);
subscribeToNewBlocks(baseProvider);
subscribeToNewBlocks(optimismProvider);
subscribeToNewBlocks(blastProvider);
subscribeToNewBlocks(gnosisProvider);
subscribeToNewBlocks(fantomProvider);
subscribeToNewBlocks(avalancheProvider);
subscribeToNewBlocks(binanceProvider);
subscribeToNewBlocks(polygonProvider);
