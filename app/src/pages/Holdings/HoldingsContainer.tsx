import React from 'react';
import HoldingsView from './HoldingsView';
import useHolding from './useHolding';

const HoldingsContainer = () => {
  const {holdingList, keyExtractor} = useHolding();
  return <HoldingsView holdingList={holdingList} keyExtractor={keyExtractor} />;
};

export default HoldingsContainer;
