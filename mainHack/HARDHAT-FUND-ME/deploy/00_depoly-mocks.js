const { network } = require("hardhat");
const {
    deploymentchains,
    DECIMALS,
    INITIAL_ANSWER,
} = require("../helper-hardhat-config");
const { Contract } = require("ethers");

module.exports = async ({ getNamedAccounts, deployments }) => {
    const { deploy, log } = deployments;
    const { deployer } = await getNamedAccounts();
    // const chainId = network.config.chainId;
    // console.log(chainId);

    if (deploymentchains.includes(network.name)) {
        log("Local network dectected, Deploying Mocks...");
        await deploy("MockV3Aggregator", {
            Contract: "MockV3Aggregator",
            from: deployer,
            log: true,
            args: [DECIMALS, INITIAL_ANSWER],
        });
        log("Mocks Deployed!");
        log("---------------------------------");
    }
};

module.exports.tags = ["all", "mocks"];
