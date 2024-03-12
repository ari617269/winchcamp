import React from 'react';
import useHolding from '../Holdings/useHolding';

const useProfitAndLoss = () => {
  const {pNLState} = useHolding();
  const [expanded, setExpanded] = React.useState<boolean>(false);
  const toggleTriangleExpanded = React.useCallback(() => {
    setExpanded(value => !value);
  }, [setExpanded]);
  return {
    pNLState,
    expanded,
    toggleTriangleExpanded,
  };
};

export default useProfitAndLoss;
