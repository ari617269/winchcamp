import React from 'react';
import {StyleSheet} from 'react-native';
import styled from 'styled-components/native';
import {Holding, HoldingList} from '../../types';
import {HoldingItem} from '../../components';

const Container = styled.View`
  flex: 1;
  background-color: #c3c3c8;
`;

const HoldingsList = styled.FlatList`
  flex: 1;
`;

const Text = styled.Text``;

const styles = StyleSheet.create({
  contentContainerStyle: {
    alignItems: 'stretch',
  },
});

interface Props {
  holdingList: HoldingList;
  keyExtractor: (item: unknown) => string;
}

const HoldingsView: React.FC<Props> = (props: Props) => {
  const {holdingList, keyExtractor} = props;
  const renderItem = React.useCallback(({item}: {item: unknown}) => {
    const holding = item as Holding;
    return <HoldingItem holding={holding} />;
  }, []);
  return (
    <Container>
      <HoldingsList
        data={holdingList}
        keyExtractor={keyExtractor}
        renderItem={renderItem}
        contentContainerStyle={styles.contentContainerStyle}
      />
    </Container>
  );
};

export default HoldingsView;
