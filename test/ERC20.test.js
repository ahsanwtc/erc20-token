const ERC20 = artifacts.require("ERC20");

/*
 * uncomment accounts to access the test accounts made available by the
 * Ethereum client
 * See docs: https://www.trufflesuite.com/docs/truffle/testing/writing-tests-in-javascript
 */
contract("ERC20", function (/* accounts */) {
  it("should assert true", async function () {
    await ERC20.deployed();
    return assert.isTrue(true);
  });
});
