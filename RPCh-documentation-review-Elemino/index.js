const RPChCrypto = require("@rpch/crypto");
const sdk = require("@rpch/sdk").default;
const EthereumTx = require("ethereumjs-tx").Transaction;
const Web3 = require("web3");

// Define the async function
async function sendTransaction() {
  const rpcSdk = new sdk({
    crypto: RPChCrypto,
    client: "#",
    timeout: 20000,
  });

  try {
    // Initialize the SDK
    await rpcSdk.start();

    // Set the provider endpoint
    rpcSdk.setProviderEndpoint("http://localhost:8080/?exit-provider=https://primary.gnosis-chain.rpc.hoprtech.net");

    const gasPrice = Buffer.from("20000000000", "hex");

    // Define the transaction object
    const tx = {
      from: "0x3e9CaF0e0c0EAcdC1dA5e32c05653765AbF11a55", // sender's address
      to: "0xDc6c5FbfA75FF89ebfc80e44c54daF431846245c", // recipient's address
      value: Web3.utils.toHex("1000000000000000000"), // 1 ETH in wei
      gasPrice: gasPrice, // 20 Gwei
      nonce: 0, // the transaction nonce
      chainId: 1, // the network ID (1 for Ethereum mainnet)
    };

    // Sign the transaction with a private key
    const privateKey = Buffer.from(
      "9c971ffbec8b9bdcba371b0d1cf67949d34f8314c0884dd39b12add378dc821b",
      "hex"
    );

    const txObject = new EthereumTx(tx, { chain: "mainnet" });
    txObject.sign(privateKey);

    // Create and send the transaction request
    const serializedTx = txObject.serialize();
    const txRequest = await rpcSdk.createRequest("provider", JSON.stringify({
      jsonrpc: "2.0",
      id: 1,
      method: "eth_sendRawTransaction",
      params: ["0x" + serializedTx.toString("hex")],
    }));
    const txResponse = await rpcSdk.sendRequest(txRequest);

    console.log("Transaction hash:", txResponse.body.result);
  } catch (error) {
    console.error("Error sending transaction:", error);
  }
}

sendTransaction();