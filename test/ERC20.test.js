const ERC20 = artifacts.require('ERC20');

/*
 * uncomment accounts to access the test accounts made available by the
 * Ethereum client
 * See docs: https://www.trufflesuite.com/docs/truffle/testing/writing-tests-in-javascript
 */
contract('ERC20', accounts => {
  let token = null;
  const name = 'My Token', symbol = 'MTK', decimals = 18, totalSupply = 100000;

  before('before tests start', async () => {
    token = await ERC20.deployed();
  });

  it('should be deployed correctly', async () => {
    assert(await token.name() === name, 'name not correct');
    assert(await token.symbol() === symbol, 'symbol not correct');
    assert((await token.decimals()).toNumber() === decimals, 'decimals not correct');
    assert((await token.totalSupply()).toNumber() === totalSupply, 'totalSupply not correct');
  });

});
