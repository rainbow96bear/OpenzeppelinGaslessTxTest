const { Contract } = require("ethers");
const {
  DefenderRelaySigner,
  DefenderRelayProvider,
} = require("defender-relay-client/lib/ethers");
const { ForwarderAbi } = require("../../src/abi/index.js");

const ForwarderAddress = "0x4943523cE751691C67B78Dffb502E319778a82BC";

async function relay(forwarder, request, signature) {
  // Validate request on the forwarder contract
  const valid = await forwarder.verify(request, signature);
  if (!valid) throw new Error("Invalid request");

  // Send meta-tx through relayer to the forwarder contract
  const gasLimit = (parseInt(request.gas) + 50000).toString();
  return await forwarder.execute(request, signature, { gasLimit });
}

function handler(event) {
  const { request, signature } = event;
  console.log("Relaying", request);

  // Initialize Relayer provider and signer, and forwarder contract
  const credentials = {
    apiKey: process.env.REACT_APP_RELAYER_API_KEY,
    apiSecret: process.env.REACT_APP_RELAYER_API_SECRET,
  };
  const provider = new DefenderRelayProvider(credentials);
  const signer = new DefenderRelaySigner(credentials, provider, {
    speed: "fast",
  });
  const forwarder = new Contract(ForwarderAddress, ForwarderAbi.abi, signer);

  // Relay transaction!
  return relay(forwarder, request, signature)
    .then((tx) => {
      console.log(`Sent meta-tx: ${tx.hash}`);
      return { txHash: tx.hash };
    })
    .catch((error) => {
      console.error(error);
      throw error;
    });
}

module.exports = {
  handler,
  relay,
};
