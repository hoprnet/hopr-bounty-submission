import { ethers, JsonRpcProvider } from "ethers";
import * as RPChCrypto from "@rpch/crypto-for-nodejs";
import { RPChProvider } from "@rpch/ethers";
import { LocalStorage } from "node-localstorage";
const localStorage = new LocalStorage("./storage");

async function setKeyVal(key, val) {
  localStorage.setItem(key, val);
}

async function getKeyVal(key) {
  return localStorage.getItem(key);
}

// Set up the RPChProvider instance
const providerUrl = "https://rpc.ankr.com/eth_goerli";
const hoprSdkOps = {
  crypto: RPChCrypto,
  client: "trial",
  timeout: 120000,
  discoveryPlatformApiEndpoint: "https://staging.discovery.rpch.tech",
};
const provider = new RPChProvider(providerUrl, hoprSdkOps, setKeyVal, getKeyVal);
const privateKey = ""; // Fill in your private key

const wallet = new ethers.Wallet(privateKey, provider);

async function sendEth() {
  // Create a transaction
  const transaction = {
    to: "0x742E42c62843515d0608a8e6f70176584e7017D3",
    value: ethers.parseEther("0.1"),
  };

  try {
    // Send the transaction
    const transactionResponse = await wallet.sendTransaction(transaction);
    console.log("Transaction sent! Hash:", transactionResponse.hash);

    // Wait for the transaction to be mined
    const receipt = await transactionResponse.wait();
    console.log("Transaction mined! Block number:", receipt.blockNumber);
  } catch (error) {
    console.error("Error sending transaction:", error);
  }
}

sendEth();
