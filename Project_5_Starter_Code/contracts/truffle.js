var HDWalletProvider = require('truffle-hdwallet-provider');

const mnemonic = 'flip affair sentence host suggest old clutch crucial jungle cube deal symbol';
const infura = 'https://rinkeby.infura.io/v3/ca08deb078344c4398e5003a61c2594a'

module.exports = {
  networks: { 
    development: {
      host: '127.0.0.1',
      port: 8545,
      network_id: "*"
    }, 
    rinkeby: {
      provider: () => new HDWalletProvider(mnemonic, infura),
      network_id: 4,
      gas : 6700000,
      gasPrice : 10000000000
    },
  }
};