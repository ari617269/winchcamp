import React from 'react';
import ProfitAndLossView from './ProfitAndLossView';
import useProfitAndLoss from './useProfitAndLoss';

const ProfitAndLossContainer = () => {
  const {pNLState, expanded, toggleTriangleExpanded} = useProfitAndLoss();
  return (
    <ProfitAndLossView
      pNLState={pNLState}
      expanded={expanded}
      toggleTriangleExpanded={toggleTriangleExpanded}
    />
  );
};

export default ProfitAndLossContainer;
