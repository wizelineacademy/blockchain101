import Block from './block';
import Transaction from './transaction';

export default class BlockChain {

    constructor() {
        this.chain = [this.createGenesisBlock()];
        this.difficulty = 3;
        this.pendingTransactions = [];
        this.miningReward = 100;
    }

    createGenesisBlock() {
        return new Block(Date.now(), [], "");
    }

    getLatestBlock() {
        return this.chain[this.chain.length - 1];
    }

    addTransaction(transaction) {
        if (!transaction.fromAddress || !transaction.toAddress) {
            throw new Error('Transaction must include from and to address');
        }
        // Verify that the transaction is valid and valid before it can be submitted to the trading pool.
        if (!transaction.isValid()) {
            throw new Error('Cannot add invalid transaction to the chain');
        }
        // Add tx to the mempool
    }

    minePendingTransactions(miningRewardAddress) {
        
        // Pakcage all pending transactions together in the same block

        // Mining, that is, constantly trying nonce to make the hash Vluw meet the requirements

        // Put the miner fee transaction into pendingTransactions for the next processing operation. The miner fee transaction is characterized by the source account being empty.
    }

    getBalanceOfAddress(address) {
        // iterate over the chain, block by block
        // tx by tx, checking for from and to address
        let balance = 0;
        for (const block of this.chain) {
            for (const transaction of block.transactions) {
               // check if address sent tokens in this tx

               // check if address reveived tokens in this tx
            }
        }
        return balance;
    }

    isChainValid() {
        
        // traverse blocks in the chain, having the previous and the current blocks
        for (let i = 1; i < this.chain.length; i++) {
            const currentBlock = this.chain[i];
            const previousBlock = this.chain[i - 1];
            // Check if all transactions in the block are valid.

            // check if current block hash is valid
  
            // check block previous hash is valid

        }
        return true;
    }
}