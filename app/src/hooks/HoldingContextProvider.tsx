import React from 'react';
import HoldingContext from './HoldingContext';
import useHoldingState from './useHoldingState';

interface Props {
  children: JSX.Element;
}

const HoldingContextProvider: React.FC<Props> = (props: Props) => {
  const {children} = props;
  const {holdingList, pNLState, setHoldingList, setPNLState} =
    useHoldingState();
  return (
    <HoldingContext.Provider
      value={{holdingList, pNLState, setHoldingList, setPNLState}}>
      {children}
    </HoldingContext.Provider>
  );
};

export default HoldingContextProvider;
