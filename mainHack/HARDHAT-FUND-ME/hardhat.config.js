require("@nomicfoundation/hardhat-toolbox");
require("hardhat-deploy");

/** @type import('hardhat/config').HardhatUserConfig */
module.exports = {
    solidity: "0.8.8",
    defaultNetwork: "hardhat",
    networks: {
        Ethereum: {
            url: "https://eth-sepolia.g.alchemy.com/v2/2WkaJswATYEMBaptL0cvI-iHobXjrZGb",
            accounts: [
                "b2a7326487f1ee2a37b2c4f76b69fbc1210c2ee06c06f461e46290ef26f1d768",
            ],
            gasPrice: 30000000000,
        },
        Local: {
            url: "HTTP://172.20.16.1:7545",
            accounts: [
                "0x8fe84a15a4626cbae45a93f2ddbfd6d757daae9224f29fe86c4fb4e9d9671f6e",
            ],
            gasPrice: 30000000000,
        },
    },
    namedAccounts: {
        deployer: {
            default: 0,
            1: 0,
        },
    },
};
