pragma solidity ^0.4.15;

contract InsuranceList {
  address toBeInsured;
  string name;
  string term1;
  uint256 payout1;
  uint256 premium;

// request an insurance
function requestInsurance(string _name, string _term1, uint256 _payout1, uint256 _premium) public {
  toBeInsured = msg.sender;
  name = _name;
  term1 = _term1;
  payout1 = _payout1;
  premium = _premium;
}

// get insurance request
function getInsuranceRequest() public returns (
  address _toBeInsured,
  string _name,
  string _term1,
  uint256 _payout1,
  uint256 _premium
  ) {
    return(toBeInsured, name, term1, payout1, premium);
  }
}