import fs from 'fs';
import csvParser from 'csv-parser';

export const addresses = new Set<string>();

// Add s to the set
export function addAddress(address: string) {
  addresses.add(address);
}

export function loadAddressesFromCSV(filePath: string): Promise<void> {
  return new Promise((resolve, reject) => {
    fs.createReadStream(filePath)
      .pipe(
        csvParser({
          headers: false, // no headers in CSV file
        }),
      )
      .on('data', (row) => {
        const address = row[0].toLowerCase(); // assuming each row has one column with the address
        addresses.add(address);
      })
      .on('end', () => {
        console.log('CSV file successfully processed and addresses loaded.');
        resolve();
      })
      .on('error', (error) => {
        reject(error);
      });
  });
}

// Check if a  address is in the set
export function isTracked(address: string): boolean {
  return addresses.has(address.toLowerCase());
}
