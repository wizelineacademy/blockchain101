const SHA256 = require('crypto-js/sha256');

export default class Block {
    constructor(timestamp, transactions, previousHash = '') {
        // The calculation of the hash must be at the end so to ensure that all data is assigned correctly before calculation
    }

    calculateHash() {

    }
}