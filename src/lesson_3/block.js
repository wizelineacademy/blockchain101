const SHA256 = require('crypto-js/sha256');

export default class Block {
    constructor(timestamp, transactions, previousHash = '') {
        this.timestamp = timestamp;
        this.transactions = transactions;
        this.previousHash = previousHash;
        this.nonce = 0;
        // The calculation of the hash must be at the end so to ensure that all data is assigned correctly before calculation
        this.hash = this.calculateHash();
    }

    calculateHash() {
        return SHA256(this.previousHash + this.timestamp + JSON.stringify(this.data) + this.nonce).toString();
    }

    hasValidTransactions() {
        // Traverse all transactions within the block, verifying them one by one
        for (const tx of this.transactions) {
            if (!tx.isValid()) {
                return false;
            }
        }
        return true;
    }

    mineBlock(difficulty) {

    }

}