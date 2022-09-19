// https://eth-goerli.g.alchemy.com/v2/YVXdSzlcARUJgiPNmizfYi4ZBs3Kq_6D

require("@nomiclabs/hardhat-waffle");

module.exports = {
  solidity: "0.8.0",
  networks: {
    ropsten: {
      url: "https://eth-goerli.g.alchemy.com/v2/YVXdSzlcARUJgiPNmizfYi4ZBs3Kq_6D",
      accounts: [
        "78d46c2c9729a3a7b4c12edbe2f87cac4fbd7c70298ebd7ef19ff868c2407e19",
      ],
    },
  },
};
