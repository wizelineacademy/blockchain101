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
        return new Block(Date.now(), "Genesis block of simple chain", "");
    }

    getLatestBlock() {
        return this.chain[this.chain.length - 1];
    }

    addTransaction(transaction) {
        // Verify that the transaction is valid and valid before it can be submitted to the trading pool.
    }

    minePendingTransactions(miningRewardAddress) {
        // Pakcage all pending transactions together in the same block

        // Mining, that is, constantly trying nonce to make the hash Vluw meet the requirements

        // Put the miner fee transaction into pendingTransactions for the next processing operation. The miner fee transaction is characterized by the source account being empty.
    }

    getBalanceOfAddress(address) {

    }

    isChainValid() {

    }
}