import React from "react";

import {
  Container,
  Header,
  Title,
  Icon,
  Content,
  Amount,
  LastTransaction,
} from "./styles";

export const HilightCart = () => {
  return (
    <Container>
      <Header>
        <Title>Incoming</Title>
        <Icon name="arrow-up-circle" />
      </Header>

      <Content>
        <Amount>$ 17.400,00</Amount>
        <LastTransaction>Last incoming 13th of April</LastTransaction>
      </Content>
    </Container>
  );
};
