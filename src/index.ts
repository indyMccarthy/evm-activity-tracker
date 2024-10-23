import { loadAddressesFromCSV, addresses } from './addressStorage';
import './eventListeners';

async function main() {
  try {
    await loadAddressesFromCSV('resources/addresses.csv');
    console.log(`${addresses.size} addresses loaded in addresses HashSet.`);
    console.log('Listening for transactions involving tracked addresses...');
  } catch (error) {
    console.error('Error loading addresses:', error);
  }
}

main();
