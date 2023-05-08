import * as RPChCrypto from "@rpch/crypto";
import SDK from "@rpch/sdk";
import { ethers } from "ethers";

const sdk = new SDK(
  {
    crypto: RPChCrypto,
    client: "your_client_name",
    timeout: 20000,
    discoveryPlatformApiEndpoint: "https://staging.discovery.rpch.tech",
  },
  setKeyValFunction,
  getKeyValFunction
);

async function setKeyVal(key: string, val: string): Promise<void> {
  localStorage.setItem(key, val);
}

async function getKeyVal(key: string): Promise<string | undefined> {
  return localStorage.getItem(key);
}

async function sendTransaction() {
  await sdk.start();

  const providerUrl = 'https://primary.gnosis-chain.rpc.hoprtech.net';
  const provider = new ethers.providers.JsonRpcProvider(providerUrl, {
    RPCh: {
      provider: sdk,
    },
  });

  const privateKey = 'your_private_key_here';
  const wallet = new ethers.Wallet(privateKey, provider);

  const tx = {
    to: '0x...',
    value: ethers.utils.parseEther('1'),
  };

  const signedTx = await wallet.signTransaction(tx);
  const txResponse = await sdk.sendRequest({
    provider: 'eth_sendRawTransaction',
    body: signedTx,
  });

  console.log('Transaction sent:', txResponse);

  await sdk.stop();
}

sendTransaction();
