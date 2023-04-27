import Web3 from "web3";
import RPChCrypto from '@rpch/crypto-for-nodejs';
import SDK from "@rpch/sdk";


const sdk = new SDK(
    {
      crypto: RPChCrypto,
      client: "trial",
      timeout: 20000,
      discoveryPlatformApiEndpoint: "https://staging.discovery.rpch.tech",
    }
  );


console.log(sdk);



// Set up two wallets
const walletA = {
    address: "0x3e9CaF0e0c0EAcdC1dA5e32c05653765AbF11a55",
    privateKey: "9c971ffbec8b9bdcba371b0d1cf67949d34f8314c0884dd39b12add378dc821b"
};

const walletB = {
    address: "0xDc6c5FbfA75FF89ebfc80e44c54daF431846245c",
    privateKey: "cce15d146bc58504f8ae67e75819c12351ceda67a982f5a6a9fd1c6642f79948"
};

interface TransactionParams {
    fromAddress: string;
    toAddress: string;
    privateKey: string;
    amount: string;
}

async function sendETH({ fromAddress, toAddress, privateKey, amount }: TransactionParams): Promise<void> {

    // Connect to the Ethereum network
    //const web3 = new Web3("https://rpc2.sepolia.org");

    // Create transaction object
    const transaction = {
        from: fromAddress,
        to: toAddress,
        gas: web3.utils.toHex(21000),
        value: web3.utils.toHex(web3.utils.toWei(amount, "ether"))
    };

    // Sign the transaction
    const signedTx = await web3.eth.accounts.signTransaction(transaction, privateKey);

    // Send the transaction
    web3.eth.sendSignedTransaction(signedTx.rawTransaction as string, function(error, hash) {
        if (!error) {
            console.log("Transaction hash: ", hash);
        }
        else {
            console.log("Error: ", error);
        }
    });
}

//sendETH({
//    fromAddress: walletA.address,
//    toAddress: walletB.address,
//    privateKey: walletA.privateKey,
//    amount: "0.02"
//});
