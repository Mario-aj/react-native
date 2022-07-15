import React from "react";

import { HilightCard } from "./HilightCard";

import {
  Container,
  Header,
  UserWrapper,
  UserInfo,
  UserAvatar,
  User,
  UserGreeting,
  UserName,
  Icon,
  HilightCards,
  TransctionList,
  Title,
} from "./styles";
import { TransactionCard } from "./TransactionCard";

export const Dashboard = () => {
  return (
    <Container>
      <Header>
        <UserWrapper>
          <UserInfo>
            <UserAvatar
              source={{
                uri: "https://avatars.githubusercontent.com/u/57181054?v=4",
              }}
            />
            <User>
              <UserGreeting>Hello, </UserGreeting>
              <UserName>Mário Jorge</UserName>
            </User>
          </UserInfo>
          <Icon name="power" />
        </UserWrapper>
      </Header>

      <HilightCards>
        <HilightCard
          type="income"
          title="Income"
          amount="$ 17.400,00"
          lastTransaction="Last incoming April 13th"
        />
        <HilightCard
          type="outcome"
          title="Outcome"
          amount="$ 1.259,00"
          lastTransaction="Last out coming April 3rd"
        />
        <HilightCard
          type="total"
          title="Total"
          amount="$ 1.259,00"
          lastTransaction="April 1st to 16th"
        />
      </HilightCards>

      <TransctionList>
        <Title>Listing</Title>

        <TransactionCard />
      </TransctionList>
    </Container>
  );
};
