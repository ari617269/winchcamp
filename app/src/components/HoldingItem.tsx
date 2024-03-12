import React from 'react';
import styled from 'styled-components/native';
import {Holding} from '../types';

const ItemContainer = styled.View`
  background-color: #ffffff;
  align-self: stretch;
  padding-vertical: 16px;
  padding-horizontal: 16px;
`;
const VSpacer = styled.View`
  height: 16px;
`;
const HSpacer = styled.View`
  width: 16px;
`;
const Row = styled.View`
  flex-direction: row;
  justify-content: space-between;
`;

const SymbolText = styled.Text`
  color: #626262;
  font-size: 18px;
  font-wight: 900;
  flex: 1;
`;
const QuantityText = styled.Text`
  color: #626262;
  font-size: 16px;
  font-wight: 100;
  flex: 1;
`;
const LTPPLText = styled.Text`
  color: #626262;
  font-size: 16px;
  font-wight: normal;
  flex: 1;
  text-align: right;
`;
const AmountText = styled.Text`
  color: #080808;
  font-wight: 900;
`;

interface Props {
  holding: Holding;
}

const HoldingItem: React.FC<Props> = (props: Props) => {
  const {holding} = props;
  const {symbol, quantity, ltp, profitAndLoss} = holding;
  return (
    <ItemContainer>
      <Row>
        <SymbolText>{symbol}</SymbolText>
        <HSpacer />
        <LTPPLText>
          {'LTP:'}{' '}
          <AmountText>
            {'₹'} {Number(ltp).toFixed(2)}
          </AmountText>
        </LTPPLText>
      </Row>
      <VSpacer />
      <Row>
        <QuantityText>{quantity}</QuantityText>
        <HSpacer />
        <LTPPLText>
          {'P/L:'}{' '}
          <AmountText>
            {'₹'} {Number(profitAndLoss).toFixed(2)}
          </AmountText>
        </LTPPLText>
      </Row>
    </ItemContainer>
  );
};

export default HoldingItem;
