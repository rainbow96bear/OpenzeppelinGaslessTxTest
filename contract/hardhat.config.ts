import { HardhatUserConfig } from "hardhat/config";
import "@nomicfoundation/hardhat-toolbox";
import "@nomicfoundation/hardhat-verify";
const POLYGONSCAN_API_KEY =
  process.env.POLYGONSCAN_API_KEY || "Your polygonscan API key";
const config: HardhatUserConfig = {
  defaultNetwork: "polygonMumbai",
  networks: {
    polygonMumbai: {
      url: "https://polygon-mumbai.g.alchemy.com/v2/2zk1l2CtjrKFai1toSAMQdjhmyT7vidI",
      chainId: 80001,
      // accounts: [
      //   "fee1cae01825833443d72a6433c8425b95a84ae61bc5ce60fec1908be219c2e5",
      // ],
    },
  },
  solidity: "0.8.18",
  paths: {
    artifacts: "./build/contracts",
    tests: "./test",
  },
  etherscan: {
    apiKey: {
      polygonMumbai: POLYGONSCAN_API_KEY,
    },
  },
};

export default config;
