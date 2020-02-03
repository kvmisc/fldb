////////////////////////////////////////////////////////////////////////////////
// modules
var Web3 = require('web3')
var Tx = require('ethereumjs-tx').Transaction

////////////////////////////////////////////////////////////////////////////////
// global values

// web3
var web3 = new Web3('https://ropsten.infura.io/v3/d10444a39d524e3a9567c81ad333070a')

// wallet
var addr_1 = '0x07d50c70893030529a82964a3f15443b9fdf0687'
var pk1 = Buffer.from('ce4f6073137aea12e8459e996792cc8d50fc0dee36d615e0b7c129e7dd47bb57', 'hex')
var addr_2 = '0xD2E85464C5Ad682161b2df85249204D6F00142e9'
var pk2 = Buffer.from('AEB0AFB0FA00351A234C43F4F65CAA6DAFAB89602F53C21CC79C718AC1FB6D8E', 'hex')

// contract
// var contract_abi = [{ "inputs": [{ "internalType": "string", "name": "value", "type": "string" }], "payable": false, "stateMutability": "nonpayable", "type": "constructor" }, { "constant": false, "inputs": [{ "internalType": "string", "name": "value", "type": "string" }], "name": "updateName", "outputs": [], "payable": false, "stateMutability": "nonpayable", "type": "function" }, { "constant": true, "inputs": [], "name": "name", "outputs": [{ "internalType": "string", "name": "", "type": "string" }], "payable": false, "stateMutability": "view", "type": "function" }]
// var contract_addr = '0xAa2bC25742e9bA4D7dB98c70178ddB30461193aC'
var contract_abi = [{ "constant": false, "inputs": [], "name": "getCompanys", "outputs": [{ "name": "", "type": "string" }], "payable": false, "stateMutability": "nonpayable", "type": "function" }, { "constant": false, "inputs": [{ "name": "o", "type": "string" }, { "name": "n", "type": "string" }], "name": "updateCompany", "outputs": [{ "name": "", "type": "bool" }], "payable": false, "stateMutability": "nonpayable", "type": "function" }, { "constant": false, "inputs": [{ "name": "v", "type": "string" }], "name": "addCompany", "outputs": [{ "name": "", "type": "bool" }], "payable": false, "stateMutability": "nonpayable", "type": "function" }, { "constant": true, "inputs": [], "name": "getCompanyCount", "outputs": [{ "name": "", "type": "uint256" }], "payable": false, "stateMutability": "view", "type": "function" }, { "constant": false, "inputs": [{ "name": "v", "type": "string" }], "name": "removeCompany", "outputs": [{ "name": "", "type": "bool" }], "payable": false, "stateMutability": "nonpayable", "type": "function" }]
var contract_addr = '0x19c6346af3807fb6ed161850d58296948aabe61d'
var contract = new web3.eth.Contract(contract_abi, contract_addr)


////////////////////////////////////////////////////////////////////////////////
// body begin
console.log('body begin')


// contract.methods.name().call({ from: addr_1 }, function (error, result) {
//   console.log(result)
// })
// contract.methods.getCompanyCount().call({ from: addr_1 }, function (error, result) {
//   console.log(result)
// })
contract.methods.getCompanys().call({ from: addr_1 }, function (error, result) {
  console.log(result)
})

// var data = contract.methods.getCompanys().encodeABI()

// web3.eth.getTransactionCount(addr_1, (error, txCount) => {
//   console.log(txCount)

//   var txObject = {
//     nonce: web3.utils.toHex(txCount),
//     to: contract_addr,
//     gasLimit: web3.utils.toHex(1000000),
//     gasPrice: web3.utils.toHex(web3.utils.toWei('10', 'gwei')),
//     data: data
//   }
//   console.log(txObject)


//   const tx = new Tx(txObject, { chain: 'ropsten', hardfork: 'petersburg' })
//   tx.sign(pk1)

//   var serializedTransaction = tx.serialize()
//   var raw = '0x' + serializedTransaction.toString('hex')

//   web3.eth.sendSignedTransaction(raw, (error, txHash) => {
//     console.log('txHash: ', txHash)
//   })

// })


console.log('body end')
// body end
////////////////////////////////////////////////////////////////////////////////



////////////////////////////////////////////////////////////////////////////////
// get balances
function get_balances() {
  console.log('get balances:')
  web3.eth.getBalance(addr_1, 'latest', (error, result) => {
    console.log('account 1: ', web3.utils.fromWei(result, 'ether'))
  })
  web3.eth.getBalance(addr_2, 'latest', (error, result) => {
    console.log('account 2: ', web3.utils.fromWei(result, 'ether'))
  })
}
