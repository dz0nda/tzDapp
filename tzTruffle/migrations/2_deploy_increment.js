const Increment = artifacts.require("Increment"); // step 1
// step 2
const initialStorage = 10

// step 3
module.exports = deployer => {
    deployer.deploy(Increment, initialStorage)
};