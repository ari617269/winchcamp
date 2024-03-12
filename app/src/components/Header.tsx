import React from 'react';
import styled from 'styled-components/native';

const HeaderContainer = styled.View`
  align-self: stretch;
  background-color: #721479;
  padding-horizontal: 16px;
  padding-vertical: 16px;
`;

const TitleText = styled.Text`
  font-size: 16px;
  font-weight: 700;
  color: #ffffff;
`;

interface Props {
  title: string;
}

const Header: React.FC<Props> = (props: Props) => {
  const {title} = props;
  return (
    <HeaderContainer>
      <TitleText>{title}</TitleText>
    </HeaderContainer>
  );
};

export default Header;
