import { Contract } from "ethers";
import {
  DefenderRelaySigner,
  DefenderRelayProvider,
} from "defender-relay-client/lib/ethers";
import ForwarderAbi from "../../abi/testForwarder.json";

const ForwarderAddress = "0x4943523cE751691C67B78Dffb502E319778a82BC";

async function relay(forwarder, request, signature) {
  // Validate request on the forwarder contract
  const valid = await forwarder.verify(request, signature);
  if (!valid) throw new Error("Invalid request");

  // Send meta-tx through relayer to the forwarder contract
  const gasLimit = (parseInt(request.gas) + 50000).toString();
  return forwarder.execute(request, signature, { gasLimit });
}

async function handler(event) {
  const { request, signature } = event;
  console.log("Relaying", request);

  // Initialize Relayer provider and signer, and forwarder contract
  const credentials: any = {
    apiKey: process.env.REACT_APP_RELAYER_API_KEY,
    apiSecret: process.env.REACT_APP_RELAYER_API_SECRET,
  };
  const provider = new DefenderRelayProvider(credentials);
  const signer: any = new DefenderRelaySigner(credentials, provider, {
    speed: "fast",
  });
  const forwarder = new Contract(ForwarderAddress, ForwarderAbi.abi, signer);

  // Relay transaction!
  try {
    const tx = await relay(forwarder, request, signature);
    console.log(`Sent meta-tx: ${tx.hash}`);
    return { txHash: tx.hash };
  } catch (error) {
    console.error(error);
    throw error;
  }
}

export default handler;
