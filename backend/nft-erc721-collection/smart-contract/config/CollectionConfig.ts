import CollectionConfigInterface from '../lib/CollectionConfigInterface';
import * as Networks from '../lib/Networks';
import * as Marketplaces from '../lib/Marketplaces';
import whitelistAddresses from './whitelist.json';

const CollectionConfig: CollectionConfigInterface = {
  testnet: Networks.ethereumTestnet,
  mainnet: Networks.ethereumMainnet,
  // The contract name can be updated using the following command:
  // yarn rename-contract NEW_CONTRACT_NAME
  // Please DO NOT change it manually!
  contractName: 'YourNftToken',
  tokenName: 'OOT Genesis Collection', // will appear on OpenSea at the top of the token page
  tokenSymbol: 'OOT',
  hiddenMetadataUri: 'ipfs://QmbmMRuCUVCpb2VeBPN1vs6QWDk5FRxbPGT2NKExajJBKx/hidden.json',
  maxSupply: 5,
  whitelistSale: {
    price: 0.0,
    maxMintAmountPerTx: 1,
  },
  preSale: {
    price: 0.01,
    maxMintAmountPerTx: 1,
  },
  publicSale: {
    price: 0.02,
    maxMintAmountPerTx: 1,
  },
  contractAddress: null,
  marketplaceIdentifier: 'OOT-Genesis',
  marketplaceConfig: Marketplaces.openSea,
  whitelistAddresses,
};

export default CollectionConfig;
