import React from 'react';
import styled from 'styled-components/native';

const Row = styled.View`
  margin-vertical: 8px;
  flex-direction: row;
  align-self: stretch;
`;

const Label = styled.Text`
  color: #626262;
  font-size: 18px;
  font-wight: 900;
  flex: 1;
`;
const Value = styled.Text`
  color: #626262;
  font-size: 16px;
  font-wight: normal;
  flex: 1;
  text-align: right;
`;
const HSpacer = styled.View`
  width: 16px;
`;

interface Props {
  label: string;
  value: number;
}

const PNLItem: React.FC<Props> = (props: Props) => {
  const {label, value} = props;
  return (
    <Row>
      <Label>{label}</Label>
      <HSpacer />
      <Value>
        {'₹'} {Number(value).toFixed(2)}
      </Value>
    </Row>
  );
};

export default PNLItem;
