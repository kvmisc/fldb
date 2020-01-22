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
var contract_abi = [{ "inputs": [{ "internalType": "string", "name": "value", "type": "string" }], "payable": false, "stateMutability": "nonpayable", "type": "constructor" }, { "constant": false, "inputs": [{ "internalType": "string", "name": "value", "type": "string" }], "name": "updateName", "outputs": [], "payable": false, "stateMutability": "nonpayable", "type": "function" }, { "constant": true, "inputs": [], "name": "name", "outputs": [{ "internalType": "string", "name": "", "type": "string" }], "payable": false, "stateMutability": "view", "type": "function" }]
var contract_addr = '0xAa2bC25742e9bA4D7dB98c70178ddB30461193aC'
var contract = new web3.eth.Contract(contract_abi, contract_addr)


////////////////////////////////////////////////////////////////////////////////
// body begin
console.log('body begin')


web3.eth.accounts.create()


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
