import BlockChain from './src/final/blockchain';
import Transaction from './src/final/transaction';
import { createWallet, validateWallet } from './src/final/wallet';

/*
 * Init Blockchain
 */
const SIMPLE_BLOCKCHAIN = new BlockChain();

/*
 * Setup wallets
 *
 * Create your wallet and Alice's wallet
 */
const myWallet = createWallet();
const aliceWallet = createWallet();

// Looking at the output, I did get the public key from the private key.
console.log("is the myWallet from privateKey equals to publicKey?", validateWallet(myWallet.privateKey, myWallet.publicKey));


/*
 * Transactions
 *
 * Initiate a transaction and transfer 60 from your own account to Alice's account.
 */
const tx1 = new Transaction(myWallet.publicKey, aliceWallet.publicKey, 60);

// Sign with private key
tx1.signTransaction(myWallet.privateKey);

// Submit a transaction
SIMPLE_BLOCKCHAIN.addTransaction(tx1);

console.log('starting the miner...');
SIMPLE_BLOCKCHAIN.minePendingTransactions(myWallet.publicKey);

// If the transfer is successful, the balance of Alice's account will be 60.
console.log("Balance of Alice's account is: ", SIMPLE_BLOCKCHAIN.getBalanceOfAddress(aliceWallet.publicKey));
