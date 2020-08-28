pragma solidity ^0.4.18;

contract ChainList {
  address toBeInsured;
  string name;
  string term1;
  uint payout1;
  uint premium;
}

// request an insurance
function requestInsurance(string _name, string _term1, uint _payout1, uint premium) publc {
  seller = msg.sender;
  name = _name;
  term1 = _term1;
  payout1 = _payout1;
  premium = _premium;
}