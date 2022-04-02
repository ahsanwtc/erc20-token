import React from 'react';
import { Drizzle } from '@drizzle/store';
import { drizzleReactHooks } from '@drizzle/react-plugin';

import drizzleOptions from './drizzleOptions';
import './App.css';
import LoadingComponent from './LoadingComponent';
import TokeMetadata from './TokenMetadata';
import TokenWallet from './TokenWallet';

const drizzle = new Drizzle(drizzleOptions);
const { DrizzleProvider } = drizzleReactHooks;

function App() {
  return (
    <div className="App">
      <DrizzleProvider drizzle={drizzle}>
        <LoadingComponent>
          <header className="App-header">
            <h1>ERC20 Token</h1>
            <TokeMetadata/>
            <TokenWallet />
          </header>          
        </LoadingComponent>
      </DrizzleProvider>
    </div>
  );
}

export default App;
