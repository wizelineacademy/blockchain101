import { ec as EC } from 'elliptic';

const ec = new EC('secp256k1');

export function createWallet() {
    const key = ec.genKeyPair();
    const publicKey = key.getPublic('hex');
    const privateKey = key.getPrivate('hex');

    return {
        publicKey,
        privateKey,
    }
}

export function validateWallet(privateKey, publicKey) {
    const key = ec.keyFromPrivate(privateKey);

    // Derive the public key from the private key
    const publicKeyFromPrivate = key.getPublic('hex');

    return publicKeyFromPrivate === publicKey;
}