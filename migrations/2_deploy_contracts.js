var InsuranceList = artifacts.require("./requestForInsurance.sol");

module.exports = function(deployer) {
  deployer.deploy(InsuranceList);
}