var InsuranceList = artifacts.require("./requestForInsuranace.sol");

module.exports = function(deployer) {
  deployer.deploy(InsuranceList);
}