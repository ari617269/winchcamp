import React from 'react';
import HoldingContext from './HoldingContext';
import {HoldingContextType} from '../types';

const useHoldingContext = (): HoldingContextType => {
  return React.useContext(HoldingContext);
};

export default useHoldingContext;
