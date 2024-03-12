import React from 'react';
import styled from 'styled-components/native';
import {Header} from './components';
import {HoldingsContainer, ProfitAndLossContainer} from './pages';
import {HoldingContextProvider} from './hooks';

const Container = styled.View`
  flex: 1;
  background-color: #ffffff;
`;

const SafeAreaView = styled.SafeAreaView`
  flex: 1;
  align-items: stretch;
`;

const Message = styled.Text`
  font-size: 18px;
  font-weight: bold;
  line-height: 18px;
  color: black;
`;

const App = () => {
  return (
    <Container>
      <SafeAreaView>
        <HoldingContextProvider>
          <>
            <Header title={'Upstox Holding'} />
            <HoldingsContainer />
            <ProfitAndLossContainer />
          </>
        </HoldingContextProvider>
      </SafeAreaView>
    </Container>
  );
};

export default App;
