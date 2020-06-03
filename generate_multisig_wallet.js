
let bitcore = require('bitcore-lib')
let Address = bitcore.Address
let PublicKey = bitcore.PublicKey
let Networks = bitcore.Networks
let HDPrivateKey = bitcore.HDPrivateKey

let hdPrivateKey = new HDPrivateKey()
let hdPublicKey = hdPrivateKey.hdPublicKey

let address = new Address(hdPublicKey.publicKey, Networks.livenet)


//-----------------------------------------testing-----------------------------------------

var requiredSignatures = 2
var address = new bitcore.Address(publicKeys, requiredSignatures)

//----------------------------------------------------------------------------------------