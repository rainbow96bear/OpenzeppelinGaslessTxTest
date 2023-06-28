import React, { useEffect, useState } from "react";
import axios from "axios";
import { ethers } from "ethers";

import forwardABI from "./abi/MinimalForwarder.json";
import nftABI from "./abi/testNFT.json";

import "./App.css";

function App() {
  const [imgFile, setImgFile] = useState<any>();
  const [nftName, setNftName] = useState<any>();
  const [forwarder, setForwarder] = useState<any>();
  const [nftContract, setNftContract] = useState<any>();
  const webhookURI = String(process.env.REACT_APP_WEBHOOK_URI);
  const provider = new ethers.JsonRpcProvider(
    process.env.REACT_APP_ALCHEMY_URI
  );
  const testNFTInstance = () => {
    const address = String(process.env.REACT_APP_TESTNFT_ADDRESS);
    const testNFT = new ethers.Contract(address, nftABI, provider);
    setNftContract(testNFT);
  };
  const forwardInstance = () => {
    const address = String(process.env.REACT_APP_FORWARDER_ADDRESS);
    const forwarderContract = new ethers.Contract(
      address,
      forwardABI,
      provider
    );
    setForwarder(forwarderContract);
  };
  const pinataUpload = async () => {
    if (imgFile != null && nftName != "") {
      const formData = new FormData();
      formData.append("file", imgFile);
      formData.append("name", nftName);
      const result = await axios.post("/pinataUpload", formData);
      return result.data;
    }
  };
  const EIP712Domain = [
    { name: "name", type: "string" },
    { name: "version", type: "string" },
    { name: "chainId", type: "uint256" },
    { name: "verifyingContract", type: "address" },
  ];

  const ForwardRequest = [
    { name: "from", type: "address" },
    { name: "to", type: "address" },
    { name: "value", type: "uint256" },
    { name: "gas", type: "uint256" },
    { name: "nonce", type: "uint256" },
    { name: "data", type: "bytes" },
  ];

  function getMetaTxTypeData(chainId: any, verifyingContract: any) {
    return {
      types: {
        EIP712Domain,
        ForwardRequest,
      },
      domain: {
        name: "testForwarder",
        version: "0.0.1",
        chainId,
        verifyingContract,
      },
      primaryType: "ForwardRequest",
    };
  }
  async function buildRequest(forwarder: any, input: any) {
    const nonce = await forwarder
      .getNonce(input.from)
      .then((nonce: any) => nonce.toString());
    return { value: 0, gas: 1e6, nonce, ...input };
  }

  async function buildTypedData(forwarder: any, request: any) {
    const chainId = await forwarder.runner
      .getNetwork()
      .then((n: any) => n.chainId);
    const numberChainId = Number(chainId);
    const typeData = getMetaTxTypeData(numberChainId, forwarder.target);
    return { ...typeData, message: request };
  }
  const minting = async () => {
    const pinataCID = await pinataUpload();
    const url = "ipfs://" + pinataCID;
    console.log(url);
    const to = String(process.env.REACT_APP_TESTNFT_ADDRESS);

    const userProvider = new ethers.BrowserProvider(window.ethereum);
    const signer = await userProvider.getSigner();
    console.log(signer.address);
    const from = await signer.getAddress();
    const data = await nftContract.interface.encodeFunctionData("mint", [
      signer.address,
      1000,
      url,
    ]);
    const request = await buildRequest(forwarder, { to, from, data });
    const toSign = await buildTypedData(forwarder, request);

    const signature = await userProvider.send("eth_signTypedData_v4", [
      from,
      JSON.stringify(toSign),
    ]);
    console.log(JSON.stringify(toSign));
    const mintingResult = await fetch(webhookURI, {
      method: "POST",
      body: JSON.stringify({ signature, request }),
      headers: { "Content-Type": "application/json" },
    });
    console.log(mintingResult);
  };
  useEffect(() => {
    forwardInstance();
    testNFTInstance();
  }, []);
  return (
    <div className="App">
      <input
        type="file"
        onChange={(e) => {
          const file = e.target.files && e.target.files[0];
          setImgFile(file);
        }}></input>
      <input
        type="text"
        onChange={(e) => {
          setNftName(e.target.value);
        }}></input>
      <button
        onClick={() => {
          minting();
        }}>
        nft miniting
      </button>
    </div>
  );
}

export default App;
