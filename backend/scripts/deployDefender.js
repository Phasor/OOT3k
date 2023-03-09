const hre = require("hardhat");
require("dotenv").config({path: __dirname + '/../.env'});

async function main() {
  const Defender = await hre.ethers.getContractFactory("Defender");
  const defender = await Defender.deploy();
  await defender.deployed();

  console.log(
    `Defender contract deployed to ${defender.address}`
  );
}

// We recommend this pattern to be able to use async/await everywhere
// and properly handle errors.
main().catch((error) => {
  console.error(error);
  process.exitCode = 1;
});
