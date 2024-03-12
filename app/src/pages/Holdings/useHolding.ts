import React from 'react';
import {Holding, HoldingList} from '../../types';
import {useHoldingContext} from '../../hooks';
import HoldingProvider from './HoldingProvider';
import HoldingProviderImpl from './HoldingProviderImpl';
import HoldingViewModel from './HoldingViewModel';

// eslint-disable-next-line @typescript-eslint/no-unused-vars
let holdingProvider: HoldingProvider;

const useHolding = () => {
  const {holdingList, pNLState, setHoldingList, setPNLState} = useHoldingContext();
  const keyExtractor = React.useCallback((item: unknown) => {
    const holding = item as Holding;
    return holding.symbol;
  }, []);
  React.useEffect(() => {
    holdingProvider = new HoldingProviderImpl(
      new (class ViewModel implements HoldingViewModel {
        updateHoldingList(_holdingList: HoldingList): void {
          setHoldingList(_holdingList);
        }
        updatePNLState(value: PNLState): void {
          setPNLState(value);
        }
      })(),
    );
  }, [setHoldingList, setPNLState]);
  return {
    holdingList,
    pNLState,
    keyExtractor,
  };
};

export default useHolding;
