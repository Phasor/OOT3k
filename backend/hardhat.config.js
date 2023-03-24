require("@nomicfoundation/hardhat-toolbox");
require("@nomiclabs/hardhat-etherscan");
require("hardhat-gas-reporter");
require("dotenv").config();

const privateKey = process.env.PRIVATE_KEY;
const goerliUrl = process.env.GOERLI_URL;
const etherscanKey = process.env.ETHERSCAN_API_KEY;

/** @type import('hardhat/config').HardhatUserConfig */
module.exports = {
  solidity: "0.8.9",
  networks: {
    goerli: {
      url: goerliUrl,
      accounts: [privateKey]
    }
  },
  etherscan: {
	apiKey: etherscanKey
  },
  gasReporter: {
    currency: 'USD',
    gasPrice: 21,
    enabled: (process.env.REPORT_GAS) ? true : false
  }
};