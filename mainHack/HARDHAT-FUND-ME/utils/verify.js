const { run } = require("hardhat");
// const {modules} = require(Web3);

const verify = async (contractAddress, args) => {
    console.log(`Verifying contract at ${contractAddress} with args ${args}`);
    try {
        await run("verify:verify", {
            address: contractAddress,
            constructorArguments: args,
        });
    } catch (e) {
        if (e.message.includes("Contract source code already verified")) {
            console.log("Contract already verified");
        } else {
            console.log(e);
        }
    }
};

module.exports = { verify };
