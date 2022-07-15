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

type Props = {
  title: string;
  amount: string;
  lastTransaction: string;
  type: "income" | "outcome" | "total";
};

const ICONS = {
  income: "arrow-up-circle",
  outcome: "arrow-down-circle",
  total: "dollar-sign",
};

export const HilightCard = ({
  title,
  amount,
  lastTransaction,
  type,
}: Props) => {
  return (
    <Container type={type}>
      <Header>
        <Title type={type}>{title}</Title>
        <Icon name={ICONS[type]} type={type} />
      </Header>

      <Content>
        <Amount type={type}>{amount}</Amount>
        <LastTransaction type={type}>{lastTransaction}</LastTransaction>
      </Content>
    </Container>
  );
};
