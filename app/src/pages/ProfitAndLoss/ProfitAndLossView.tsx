import React from 'react';
import styled from 'styled-components/native';
import {PNLState} from '../../types';
import {PNLItem, Triangle} from '../../components';

const Container = styled.View`
  margin-horizontal: 16px;
  margin-bottom: 32px;
`;
const VSpacer = styled.View`
  height: 8px;
`;
const Center = styled.TouchableOpacity`
  align-self: stretch;
  justify-content: center;
  align-items: center;
  padding-vertical: 10px;
`;

interface Props {
  pNLState: PNLState;
  expanded: boolean;
  toggleTriangleExpanded: () => void;
}

const ProfitAndLossView: React.FC<Props> = (props: Props) => {
  const {pNLState, expanded, toggleTriangleExpanded} = props;
  const {
    currentValueTotal,
    totalInvestment,
    todayProfitAndLoss,
    totalProfitAndLoss,
  } = pNLState;
  return (
    <Container>
      <Center onPress={toggleTriangleExpanded}>
        <Triangle expanded={expanded} />
      </Center>
      {expanded && (
        <>
          <PNLItem label={'Current Value: '} value={currentValueTotal ?? 0} />
          <PNLItem label={'Total Investment: '} value={totalInvestment ?? 0} />
          <PNLItem
            label={"Today's Profit & Loss: "}
            value={todayProfitAndLoss ?? 0}
          />
          <VSpacer />
        </>
      )}
      <PNLItem label={'Profit & Loss: '} value={totalProfitAndLoss ?? 0} />
    </Container>
  );
};

export default ProfitAndLossView;
