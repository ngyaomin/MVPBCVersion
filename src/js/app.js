App = {
     web3Provider: null,
     contracts: {},
     account: 0x0,

     init: function() {
       return App.initWeb3();
     },

     initWeb3: function() {
       if(typeof web3 !== 'undefined') {
         App.web3Provider = web3.currentProvider;
       } else {
         App.web3Provider = new Web3.providers.HttpProvider('http://localhost:7545')
       }
       web3 = new Web3(App.web3Provider);
       
       App.displayInsuranceInfo();
        
          return App.initContract();
     },
     
     displayInsuranceInfo: function() {
       web3.eth.getCoinbase(function(err, account) {
         if(err === null) {
           App.account = account;
           $('#account').text(account);
           web3.eth.getBalance(account, function(err, balance) {
             if(err === null) {
               $('#accountBalance').text(web3.fromWei(balance, "ether") + " Eth");
             }
           });
         }
       });
     },

     initContract: function() {
       $.getJSON('InsuranceList.json', function(insuranceListArtifact) {
         App.contracts.ChainList = TruffleContract(insuranceListArtifact);
       });
     },
};

$(function() {
     $(window).load(function() {
          App.init();
     });
});
