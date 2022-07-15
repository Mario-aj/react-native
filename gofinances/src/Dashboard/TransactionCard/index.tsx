import React from "react";
import {
  Container,
  Title,
  Amount,
  Icon,
  Footer,
  Category,
  CategoryName,
  Date,
} from "./styles";

export const TransactionCard = () => {
  return (
    <Container>
      <Title>Site development</Title>
      <Amount>$ 12.000,00</Amount>

      <Footer>
        <Category>
          <Icon name="dollar-sign" />
          <CategoryName>Sales</CategoryName>
        </Category>
        <Date>2022/07/10</Date>
      </Footer>
    </Container>
  );
};
