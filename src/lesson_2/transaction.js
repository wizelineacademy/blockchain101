const SHA256 = require('crypto-js/sha256');
import Elliptic from 'elliptic';

const ec = new Elliptic.ec('secp256k1');

export default class Transaction {
    constructor(fromAddress, toAddress, amount) {

    }

    // Calculate the hash in order to do the signature. You need to do this because the hash value will be signed instead of the original information directly. 
    calculateHash() {

    }

    // Incoming key
    signTransaction(signingKey) {
        // Verify if the source account is the person's address, or more specifically, verify whether the source address is the public key corresponding to the private key.

    }
}