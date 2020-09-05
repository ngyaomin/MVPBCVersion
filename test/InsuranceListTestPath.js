var InsuranceList = artifacts.require("./InsuranceList.sol");

contract('InsuranceList', function(accounts) {
  it("Should initialize with empty values", function() {
    return InsuranceList.deployed().then(function(instance) {
      return instance.getArticle();
    }).then(function(data) {
      assert.equal(data[0], 0x0, "toBeInsured must be empty");
      assert.equal(data[1], "", "Name must be empty");
      assert.equal(data[2], "", "Terms must be empty");
      assert.equal(data[3].toNumber(), 0, "Payout must be zero");
      assert.equal(data[4].toNumber(), 0, "Premium must be zero");
    })
  });
});
