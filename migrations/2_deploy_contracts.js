var InsuranceList = artifacts.require("./requestForInsurnace.sol");

module.exports = function(deployer) {
  deployer.deploy(InsuranceList);
}