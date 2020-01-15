var Web3 = require('web3')
var Tx = require('ethereumjs-tx').Transaction
web3 = new Web3(new Web3.providers.HttpProvider("https://ropsten.infura.io/v3/d10444a39d524e3a9567c81ad333070a"))
//console.log(web3)

var private_key_1 = 'ce4f6073137aea12e8459e996792cc8d50fc0dee36d615e0b7c129e7dd47bb57'
var public_key_1 = '0x07d50c70893030529a82964a3f15443b9fdf0687'
var pk1 = Buffer.from(private_key_1, 'hex')

var private_key_2 = 'AEB0AFB0FA00351A234C43F4F65CAA6DAFAB89602F53C21CC79C718AC1FB6D8E'
var public_key_2 = '0xD2E85464C5Ad682161b2df85249204D6F00142e9'
var pk2 = Buffer.from(private_key_2, 'hex')

web3.eth.getBalance(public_key_1, 'latest', (error, result) => {
  console.log('account 1: ', web3.utils.fromWei(result, 'ether'))
})
web3.eth.getBalance(public_key_2, 'latest', (error, result) => {
  console.log('account 2: ', web3.utils.fromWei(result, 'ether'))
})

var contract_abi = [{ "inputs": [{ "internalType": "string", "name": "value", "type": "string" }], "payable": false, "stateMutability": "nonpayable", "type": "constructor" }, { "constant": false, "inputs": [{ "internalType": "string", "name": "value", "type": "string" }], "name": "updateName", "outputs": [], "payable": false, "stateMutability": "nonpayable", "type": "function" }, { "constant": true, "inputs": [], "name": "name", "outputs": [{ "internalType": "string", "name": "", "type": "string" }], "payable": false, "stateMutability": "view", "type": "function" }]
var contract_addr = '0xAa2bC25742e9bA4D7dB98c70178ddB30461193aC'
var contract = new web3.eth.Contract(contract_abi, contract_addr)
//console.log(contract)

var data = contract.methods.updateName('yb').encodeABI()
//console.log(data)

web3.eth.getTransactionCount(public_key_1, (error, txCount) => {
  console.log(txCount)

  var txObject = {
    nonce: web3.utils.toHex(txCount),
    to: contract_addr,
    gasLimit: web3.utils.toHex(1000000),
    gasPrice: web3.utils.toHex(web3.utils.toWei('10', 'gwei')),
    data: data
  }
  console.log(txObject)


  const tx = new Tx(txObject, { chain: 'ropsten', hardfork: 'petersburg' })
  tx.sign(pk1)

  var serializedTransaction = tx.serialize()
  var raw = '0x' + serializedTransaction.toString('hex')

  web3.eth.sendSignedTransaction(raw, (error, txHash) => {
    console.log('txHash: ', txHash)
  })

})

