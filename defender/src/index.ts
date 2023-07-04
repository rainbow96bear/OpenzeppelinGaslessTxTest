// Import dependencies available in the autotask environment
import { ApiRelayerParams } from "defender-relay-client/lib/relayer.js";
import {
  DefenderRelaySigner,
  DefenderRelayProvider,
} from "defender-relay-client/lib/ethers";
import { ethers } from "ethers";

// Import an ABI which will be embedded into the generated js
import ForwarderAbi from "../abi/testForwarder.json";

// Address of the DAI contract (for this example)
const ForwarderAddress = "0x4943523cE751691C67B78Dffb502E319778a82BC";

// Entrypoint for the Autotask
export async function handler(event: any) {
  const { signature, request, credentials } = event.request.body;

  const provider = new DefenderRelayProvider(credentials);
  const signer: any = new DefenderRelaySigner(credentials, provider, {
    speed: "fast",
  });
  const forwarder = new ethers.Contract(
    ForwarderAddress,
    ForwarderAbi.abi,
    signer
  );

  // Send meta-tx through relayer to the forwarder contract
  const gasLimit = (parseInt(request.gas) + 50000).toString();
  const tx = await forwarder.execute(request, signature, { gasLimit });
  return { txHash: tx.hash };
}
