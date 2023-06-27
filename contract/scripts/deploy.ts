import { ethers } from "hardhat";
import dotenv from "dotenv";
import {
  DefenderRelayProvider,
  DefenderRelaySigner,
} from "defender-relay-client/lib/ethers";

async function main() {
  dotenv.config();
  const credentials = {
    apiKey: String(process.env.RELAYER_API_KEY),
    apiSecret: String(process.env.RELAYER_API_SECRET),
  };
  const provider = new DefenderRelayProvider(credentials);
  const relaySigner = new DefenderRelaySigner(credentials, provider, {
    speed: "fast",
  });

  const testForwarder = await ethers.getContractFactory("testForwarder");
  const testForwarderContract = await testForwarder
    .connect(relaySigner)
    .deploy();
  console.log("------testForwarder------");
  console.log(testForwarder);
  console.log("------testForwarder------");
  console.log("deployed to : ", testForwarderContract.target);
  const testNFT = await ethers.getContractFactory("testNFT");
  const testNFTContract = await testNFT
    .connect(relaySigner)
    .deploy(testForwarderContract.target);
  console.log("------testcontract------");
  console.log(testNFT);
  console.log("------testcontract------");
  console.log("deployed to : ", testNFTContract.target);
}

// We recommend this pattern to be able to use async/await everywhere
// and properly handle errors.
main().catch((error) => {
  console.error(error);
  process.exitCode = 1;
});
