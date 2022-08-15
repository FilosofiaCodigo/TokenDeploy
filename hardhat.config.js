require("@nomicfoundation/hardhat-toolbox");
require("@nomiclabs/hardhat-etherscan");
require('dotenv').config()

module.exports = {
  solidity: "0.8.16",
  networks: {
    hardhat: {
      forking: {
        url: process.env.MAINNET_RPC_URL,
      },
    }
  }
};

if(process.env.GOERLI_RPC_URL && process.env.GOERLI_PRIVATE_KEY)
{
  module.exports["networks"]["goerli"] = {
    url: process.env.GOERLI_RPC_URL,
    accounts: [process.env.GOERLI_PRIVATE_KEY],
  }
}

if(process.env.ETHERSCAN_API_KEY)
{
  module.exports["etherscan"] = {
    apiKey: process.env.ETHERSCAN_API_KEY
  }
}