const HDKey = require('hdkey')
const bip39 = require('bip39')
const bip32 = require('bip32')

// https://blockchain.info/unspent?active=bitcoinaddress

function createKeysWithMnemonic () {
    const mnemonic = bip39.generateMnemonic()
    const seed = bip39.mnemonicToSeed(mnemonic).toString('hex')
    let hdkey = HDKey.fromMasterSeed(seed)
    let keys = hdkey.toJSON()
    const node = bip32.fromBase58(keys.xpriv)
    return {keys: keys, mnemonic: mnemonic, WIF: node.toWIF()}
}

function createKeysFromMnemonic (mnemonic) {
    if (mnemonic) {
        const seed = bip39.mnemonicToSeed(mnemonic).toString('hex')
        let hdkey = HDKey.fromMasterSeed(seed)
        let keys = hdkey.toJSON()
        const node = bip32.fromBase58(keys.xpriv)
        return {keys: keys, mnemonic: mnemonic, WIF: node.toWIF()}
    }
}

console.log(createKeysWithMnemonic())