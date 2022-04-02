const { expectEvent, expectRevert } = require('@openzeppelin/test-helpers');

const ERC20 = artifacts.require('ERC20');

/*
 * uncomment accounts to access the test accounts made available by the
 * Ethereum client
 * See docs: https://www.trufflesuite.com/docs/truffle/testing/writing-tests-in-javascript
 */
contract('ERC20', accounts => {
  let token = null;
  const name = 'My Token', symbol = 'MTK', decimals = 18, totalSupply = 100000;
  const [owner, user, spender] = accounts;

  beforeEach('before tests start', async () => {
    token = await ERC20.new(name, symbol, decimals, totalSupply);
  });

  it('should be deployed correctly', async () => {
    assert(await token.name() === name, 'name not correct');
    assert(await token.symbol() === symbol, 'symbol not correct');
    assert((await token.decimals()).toNumber() === decimals, 'decimals not correct');
    assert((await token.totalSupply()).toNumber() === totalSupply, 'totalSupply not correct');
  });

  it('should transfer tokens', async () => {
    const tokenToTransfer = 50;
    const balanceBefore = await token.balanceOf(user);
    const receipt = await token.transfer(user, tokenToTransfer, { from: owner });
    const balanceAfter = await token.balanceOf(user);

    const diff = balanceAfter.sub(balanceBefore).toNumber();
    assert(diff === tokenToTransfer);
    assert((await token.balanceOf(owner)).toNumber() === totalSupply - tokenToTransfer);
    await expectEvent(receipt, 'Transfer', { from: owner, to: user, value: web3.utils.toBN(tokenToTransfer) });
  });

  it('should NOT transfer tokens if balance is not enough', async () => {
    const tokenToTransfer = totalSupply + 1;
    await expectRevert(
      token.transfer(user, tokenToTransfer, { from: owner }),
      'not enough balance'
    );
  });

  it('should approve a transfer', async () => {
    const tokenToApprove = 100;
    const receipt = await token.approve(spender, tokenToApprove, { from: owner });
    await expectEvent(receipt, 'Approval', { owner, spender, value: web3.utils.toBN(tokenToApprove) });
    assert((await token.allowance(owner, spender)).toNumber() === tokenToApprove);
  });

  it('should NOT approve a transfer if owner is the spender', async () => {
    const tokenToApprove = 100;
    await expectRevert(
      token.approve(owner, tokenToApprove, { from: owner }),
      'sender can\'t be spender'
    );
  });

});
