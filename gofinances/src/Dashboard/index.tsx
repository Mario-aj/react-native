import React from "react";
import { getBottomSpace } from "react-native-iphone-x-helper";

import { HilightCard } from "./HilightCard";
import type { Data } from "./TransactionCard";

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
  Transctions,
  Title,
  TransctionList,
} from "./styles";
import { TransactionCard } from "./TransactionCard";

export const Dashboard = () => {
  const data = [
    {
      type: "positive",
      amount: "$ 12.000,00",
      title: "Site Development",
      category: {
        name: "Sales",
        icon: "dollar-sign",
      },
      date: "18/07/2022",
    },
    {
      type: "negative",
      amount: "$ 12.000,00",
      title: "Site Development",
      category: {
        name: "Sales",
        icon: "dollar-sign",
      },
      date: "18/07/2022",
    },
    {
      type: "positive",
      amount: "$ 12.000,00",
      title: "Site Development",
      category: {
        name: "Sales",
        icon: "coffee",
      },
      date: "18/07/2022",
    },
    {
      type: "negative",
      amount: "$ 12.000,00",
      title: "Site Development",
      category: {
        name: "Sales",
        icon: "shopping-bag",
      },
      date: "18/07/2022",
    },
  ];

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

      <Transctions>
        <Title>Listing</Title>

        <TransctionList
          data={data}
          renderItem={({ item }) => <TransactionCard data={item as Data} />}
          showsVerticalScrollIndicator={false}
          contentContainerStyle={{ paddingBottom: getBottomSpace() }}
        />
      </Transctions>
    </Container>
  );
};
