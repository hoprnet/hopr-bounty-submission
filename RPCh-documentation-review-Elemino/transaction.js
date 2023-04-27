const Web3 = require('web3');
const RPChCrypto = require('@rpch/crypto-for-nodejs');
const SDK = require("@rpch/sdk");



// Set up two wallets
const walletA = {
    address: "0x3e9CaF0e0c0EAcdC1dA5e32c05653765AbF11a55",
    privateKey: "9c971ffbec8b9bdcba371b0d1cf67949d34f8314c0884dd39b12add378dc821b"
};

const walletB = {
    address: "0xDc6c5FbfA75FF89ebfc80e44c54daF431846245c"
};



function sendETH(fromAddress = walletA.address, toAddress = walletB.address, privateKey = walletA.privateKey, amount = "0.001") {

    // Connect to the Ethereum network
    const web3 = new Web3("https://rpc2.sepolia.org");


    web3.eth.getBalance(fromAddress, function(error, result) {
        if (!error) {
          console.log(web3.utils.fromWei(result, 'ether')); // account balance in ETH
        }
        else {
          console.error(error);
        }
      });
    

    // Create transaction object
    const transaction = {
        from: fromAddress,
        to: toAddress,
        gas: web3.utils.toHex(21000),
        value: web3.utils.toHex(web3.utils.toWei(amount, "ether"))
    };

    // Sign the transaction
    web3.eth.accounts.signTransaction(transaction, privateKey)
        .then((signedTx) => {

            // Send the transaction
            web3.eth.sendSignedTransaction(signedTx.rawTransaction)
                .on('receipt', (receipt) => {
                    console.log("Transaction receipt: ", receipt);
                })
                .on('error', (error) => {
                    console.log("Error: ", error);
                });
        })
        .catch((error) => {
            console.log("Error: ", error);
        });
}

sendETH();
