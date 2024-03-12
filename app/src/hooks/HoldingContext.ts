import React from 'react';
import {HoldingContextType} from '../types';

const HoldingContext = React.createContext<HoldingContextType>({
  holdingList: [],
  pNLState: {},
  setHoldingList: () => {},
  setPNLState: () => {},
});

export default HoldingContext;
