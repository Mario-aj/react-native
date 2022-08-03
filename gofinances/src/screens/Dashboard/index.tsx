import React from "react";

import { HilightCard } from "./HilightCard";
import { TransactionCard } from "./TransactionCard";

import type { TransactionCardProps } from "./TransactionCard";

import {
  Container,
  Header,
  UserWrapper,
  UserInfo,
  UserAvatar,
  User,
  UserGreeting,
  UserName,
  LogoutButton,
  Icon,
  HilightCards,
  Transctions,
  Title,
  TransctionList,
} from "./styles";

export type DataListProps = TransactionCardProps & {
  id: string;
};

export const Dashboard = () => {
  const data: DataListProps[] = [
    {
      id: "1",
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
      id: "2",
      type: "negative",
      amount: "$ 12.000,00",
      title: "Site Development",
      category: {
        name: "Sales",
        icon: "shopping-cart",
      },
      date: "18/07/2022",
    },
    {
      id: "3",
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
      id: "4",
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
          <LogoutButton onPress={() => {}}>
            <Icon name="power" />
          </LogoutButton>
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
          // @ts-ignore
          keyExtractor={(item: DataListProps) => item.id}
          renderItem={({ item }) => (
            <TransactionCard data={item as DataListProps} />
          )}
        />
      </Transctions>
    </Container>
  );
};
