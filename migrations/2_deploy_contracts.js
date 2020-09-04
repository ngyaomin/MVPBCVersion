const InsuranceList = artifacts.require("InsuranceList");

module.exports = function(deployer) {
  deployer.deploy(InsuranceList);
};