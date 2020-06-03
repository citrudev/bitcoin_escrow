require('env')

const BitcoinGateway = require('bitcoin-receive-payments')
const gateway = new BitcoinGateway(`xpub661MyMwAqRbcFW31YEwpkMuc5THy2PSt5bDMsktWQcFF8syAmRUapSCGu8ED9W6oDMSgv6Zz8idoc4a6mr8BDzTJY47LJhkJ8UB7
WEGuduB`, '8fe5c6993a784eb4a1e0ce54de7939cd')


gateway.events.on('initialized', function() {
  console.log('gateway has been intialized.')
  gateway.createAddress(unique_ID).then(function(address) {

    console.log('got new address', address.address, 'and it has', address.seconds_left / 60, 'minutes left before it expires.')
    
    var amount = 10.99
    
    console.log('ask user to pay ', amount, 'USD in it as', gateway.USDtoBIT(amount) + ' bits, using HTML, preferably as a QR code')
    
    }).catch(function() {
        console.log('limit reached! cant get a new address :(')
    })
 
})


gateway.events.on('payment', function(payment) {
  console.log('got a payment!.', payment)
})


gateway.connect()