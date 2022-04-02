import React from "react";
import { drizzleReactHooks } from '@drizzle/react-plugin';
import { newContextComponents } from '@drizzle/react-components';

const { useDrizzle, useDrizzleState } = drizzleReactHooks;
const { ContractData } = newContextComponents;

const TokeMetadata = () => {
  const { drizzle } = useDrizzle();
  const state = useDrizzleState(state => state);

  return (
    <div>
      <div>
        <h4>Name</h4>
        <ContractData drizzle={drizzle} drizzleState={state} contract='ERC20' method='name' />
      </div>
      <div>
        <h4>Symbol</h4>
        <ContractData drizzle={drizzle} drizzleState={state} contract='ERC20' method='symbol' />
      </div>
      <div>
        <h4>Decimals</h4>
        <ContractData drizzle={drizzle} drizzleState={state} contract='ERC20' method='decimals' />
      </div>
    </div>
  );
};

export default TokeMetadata;