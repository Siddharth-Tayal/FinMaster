const { network } = require("hardhat");
const { networkConfig } = require("../helper-hardhat-config");
const { deploymentchains } = require("../helper-hardhat-config");
const { verify } = require("../utils/verify");

module.exports = async ({ getNamedAccounts, deployments }) => {
    // console.log("Deploying FundMe contract...");
    const { deploy, log } = deployments;
    const { deployer } = await getNamedAccounts();
    const chainId = network.config.chainId;

    // const ethUSDPriceFeedAddress = networkConfig[chainId]["ethUSDPriceFeed"];
    let ethUSDPriceFeedAddress;
    console.log("chainId", chainId);

    if (deploymentchains.includes(network.name)) {
        const ethUsdAggregator = await deployments.get("MockV3Aggregator");
        ethUSDPriceFeedAddress = ethUsdAggregator.address;
    } else {
        ethUSDPriceFeedAddress = networkConfig[11155111]["ethUSDPriceFeed"];
    }

    // const args = ethUSDPriceFeedAddress;
    const fundMe = await deploy("FundMe", {
        from: deployer,
        args: [ethUSDPriceFeedAddress],
        log: true,
        waitConfirmations: network.config.blockconfirmations || 1,
    });

    if (
        !deploymentchains.includes(network.name) &&
        process.env.ETHERSCAN_API_KEY
    ) {
        await verify(fundMe.address, [ethUSDPriceFeedAddress], network.name);
    }
    log("---------------------------------");
};

module.exports.tags = ["all", "FundMe"];
