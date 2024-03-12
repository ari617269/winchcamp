import React from 'react';
import {HoldingContextType, HoldingList, PNLState} from '../types';

const useHoldingState = (): HoldingContextType => {
  const [holdingList, setHoldingList] = React.useState<HoldingList>([]);
  const [pNLState, setPNLState] = React.useState<PNLState>({});
  const updateHoldingList = React.useCallback(
    (value: HoldingList) => {
      setHoldingList(value);
    },
    [setHoldingList],
  );
  const updatePNLState = React.useCallback(
    (value: PNLState) => {
      setPNLState(value);
    },
    [setPNLState],
  );
  return {
    holdingList,
    pNLState,
    setHoldingList: updateHoldingList,
    setPNLState: updatePNLState,
  };
};

export default useHoldingState;
