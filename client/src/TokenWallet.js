import React from "react";
import { drizzleReactHooks } from '@drizzle/react-plugin';
import { newContextComponents } from '@drizzle/react-components';

const { useDrizzle, useDrizzleState } = drizzleReactHooks;
const { ContractData, ContractForm } = newContextComponents;

const TokenWallet = () => {
  const { drizzle } = useDrizzle();
  const state = useDrizzleState(state => state);

  return (
    <div>
      <div>
        <h4>Balance</h4>
        <ContractData drizzle={drizzle} drizzleState={state} contract='ERC20' method='balanceOf' methodArgs={[state.accounts[0]]} />
      </div>
      <div>
        <h4>Transfer</h4>
        <ContractForm drizzle={drizzle} contract='ERC20' method='transfer' />
      </div>
      <div>
        <h4>Transfer from</h4>
        <ContractForm drizzle={drizzle} contract='ERC20' method='transferFrom' />
      </div>
      <div>
        <h4>Approve</h4>
        <ContractForm drizzle={drizzle} contract='ERC20' method='approve' />
      </div>
    </div>
  );
};

export default TokenWallet;