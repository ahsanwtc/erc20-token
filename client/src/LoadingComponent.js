import React from 'react';
import { drizzleReactHooks } from '@drizzle/react-plugin';

const { useDrizzleState } = drizzleReactHooks;

const LoadingComponent = ({ children }) => {
  const drizzleStatus = useDrizzleState(state => state.drizzleStatus);
  if (drizzleStatus.initialized === false) {
    return "Loading...";
  }
  
  return (
    <React.Fragment>
      {children}
    </React.Fragment>
  );
};

export default LoadingComponent;