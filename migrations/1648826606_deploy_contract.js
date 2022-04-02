const ERC20 = artifacts.require("ERC20");

module.exports = function(_deployer) {
  _deployer.deploy(ERC20, 'My Token', 'MTK', 18, 100000);
};
