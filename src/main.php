<?php
require('vendor/autoload.php');

use Web3\Web3;
use Web3\Providers\HttpProvider;
use Web3\RequestManagers\HttpRequestManager;

// 网络选择
$provider = new HttpProvider(new HttpRequestManager('https://ropsten.infura.io/v3/d10444a39d524e3a9567c81ad333070a', 30));

$web3 = new Web3($provider);

$private_key_1 = 'AEB0AFB0FA00351A234C43F4F65CAA6DAFAB89602F53C21CC79C718AC1FB6D8E';
$public_key_1 = '0xD2E85464C5Ad682161b2df85249204D6F00142e9';


// $eth = $web3->eth;
// $addr_1 = '0x07d50c70893030529a82964a3f15443b9fdf0687';

// $eth->getBalance($addr_1, function ($err, $balance) {
//     if ($err !== null) {
//         echo 'Error: ' . $err->getMessage();
//         return;
//     }
//     echo 'Balance: ' . $balance . PHP_EOL;
// });

use Web3\Contract;
$contract_abi = '[{"constant":false,"inputs":[{"name":"mid","type":"uint256"},{"name":"timestamp","type":"uint256"},{"name":"coordination","type":"uint256"}],"name":"createCoordination","outputs":[],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":false,"inputs":[{"name":"mid","type":"uint256"},{"name":"timestamp","type":"uint256"},{"name":"index","type":"uint256"}],"name":"deleteCoordination","outputs":[],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":false,"inputs":[{"name":"mid","type":"uint256"},{"name":"timestamp","type":"uint256"},{"name":"coordination","type":"uint256"},{"name":"index","type":"uint256"}],"name":"updateCoordination","outputs":[],"payable":false,"stateMutability":"nonpayable","type":"function"},{"inputs":[],"payable":false,"stateMutability":"nonpayable","type":"constructor"},{"constant":true,"inputs":[],"name":"manager","outputs":[{"name":"","type":"address"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[{"name":"mid","type":"uint256"},{"name":"timestamp","type":"uint256"},{"name":"index","type":"uint256"}],"name":"readCoordination","outputs":[{"name":"","type":"uint256"}],"payable":false,"stateMutability":"view","type":"function"}]';
$contract_addr = '0x9EB0244C04adFC9795BDba985B550c3690a0Af89';
$contract = new Contract($provider, $contract_abi);
// $contract->at($contract_addr)->call('readCoordination', 1,2,0, function ($err, $res) {
//     if ($err !== null) {
//         echo 'Error: ' . $err->getMessage();
//         return;
//     }
//     echo var_dump($res);
// });



  $data = $contract->at($contract_addr)->getData('createCoordination', 1,2,12345);
  var_dump($data);

// $eth = $web3->eth;
// $eth->getTransactionCount($public_key_1, function ($err, $res) {
//   if ($err !== null) { var_dump($err); }
//   var_dump($res->toString());

//   $data = $contract->at($contract_addr)->getData('createCoordination', 1,2,12345);
//   var_dump($data);
// });

?>