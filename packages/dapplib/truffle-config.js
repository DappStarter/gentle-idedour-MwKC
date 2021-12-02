require('@babel/register');
({
    ignore: /node_modules/
});
require('@babel/polyfill');

const HDWalletProvider = require('@truffle/hdwallet-provider');

let mnemonic = 'guess clock other sugar fan regret muscle prosper hunt process metal genius'; 
let testAccounts = [
"0xff261ecf5f1f800566f593f3129e548417af6a95ea097cc73a0c8b0ca41db271",
"0xac525ff8b6c51d0e19676a7b6aa155f44116c0a6dc0d2d0c076ca27454e4a556",
"0xc1881ecd53b46ab58c6e724fc4aa262489896806219d10a8bca067f9666babcf",
"0x6d0abd2ed97a229a70615d49c80403e7a33556d42da476df7ea7cecfab585a48",
"0x70da574bdb85eec5a94eadfecf2c89976c2328bd649167301c156b134d1ee63c",
"0xa46f124d662862d4c04fec4518061632774e9582fef4b12862cf719987628174",
"0x0997f58b2113acc97328b4978654a2cd482d11853d9de51855c493516490c29c",
"0xcbb43672361ae033c8d64e68506b0cdbf5b5a25ab3bfa9662d99ab45b2933f19",
"0xdefcce259f981c18837ac567a551fdf52a43adf2ad368b723a9db18bdc092375",
"0xf6434895f1b65a5986ef62ff736eef44121ae55d169e5f1b2b287c1b92e19005"
]; 
let devUri = 'https://api.avax-test.network/ext/bc/C/rpc';

module.exports = {
    testAccounts,
    mnemonic,
    networks: {
        development: {
            uri: devUri,
            provider: () => new HDWalletProvider(
                mnemonic,
                devUri, // provider url
                0, // address index
                6, // number of addresses
                true, // share nonce
                `m/44'/60'/0'/0/` // wallet HD path
            ),
            gas: 8000000,
            network_id: '*',
            chainId: 43113,
            skipDryRun: true
        }
    },
    compilers: {
        solc: {
            version: '^0.8.0'
        }
    }
};


