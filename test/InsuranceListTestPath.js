var InsuranceList = artifacts.require("./InsuranceList.sol");
var BigNumber = require('bignumber.js');

contract('InsuranceList', function(accounts) {
  var insuranceListInstance;
  var toBeInsured = accounts[1];
  var name = "Chio Bu";
  var term1 = "Boobs";
  // var BigNumber = require('bignumber.js');
  // var payout1 = new BigNumber("1");
  // var premium1 = new BigNumber("0.1");
  // var payout1 = BigInt(10);
  // var premium1 = BigInt(1);
  const BN = require('bn.js');
  // var payout1 = new BN(10);
  // var premium1 = new BN(1);
  var payout1 = new BN(10);
  var premium = new BN(1);

  it("Should initialize with empty values", function() {
    return InsuranceList.deployed().then(function(instance) {
      return instance.getInsuranceRequest();
    }).then(function(data) {
      assert.equal(data[0], 0x0, "toBeInsured must be empty");
      assert.equal(data[1], "", "Name must be empty");
      assert.equal(data[2], "", "Terms must be empty");
      assert.equal(data[3].toNumber(), 0, "Payout must be zero");
      assert.equal(data[4].toNumber(), 0, "Premium must be zero");
    })
  });

  it("should request an insurance", function() {
    return InsuranceList.deployed().then(function(instance) {
      insuranceListInstance = instance
      return insuranceListInstance.requestInsurance(name, term1, web3.utils.toWei(payout1, "ether"), web3.utils.toWei(premium, "ether"), { from: toBeInsured});
    }).then(function() {
      return insuranceListInstance.getInsuranceRequest();
    }).then(function(data) {
      assert.equal(data[0], toBeInsured, "toBeInsured must be " + toBeInsured);
      assert.equal(data[1], name, "Name must be " + name);
      assert.equal(data[2], term1, "Terms must be " + term1);
      assert.equal(BN(data[3]), web3.utils.toWei(payout1, "ether"), "Payout must be " + web3.utils.toWei(payout1));
      assert.equal(BN(data[4]), web3.utils.toWei(premium, "ether") , "Premium must be " + web3.utils.toWei(premium));
    });
  });
});
