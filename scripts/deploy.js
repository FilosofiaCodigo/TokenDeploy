const hre = require("hardhat");

async function main() {
  const MyToken = await ethers.getContractFactory("MyToken");
  uniswapRouterAddress = "0x7a250d5630B4cF539739dF2C5dAcb4c659F2488D"
  vaultAddress = "0x18747BE67c5886881075136eb678cEADaf808028"
  const myToken = await MyToken.deploy(uniswapRouterAddress, vaultAddress);
  await myToken.deployed();
  console.log("myToken launched at:", myToken.address);
}

main().catch((error) => {
  console.error(error);
  process.exitCode = 1;
});