import React from "react";

import { HilightCart } from "./HilightCart";

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
  HilightCarts,
} from "./styles";

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
              <UserGreeting>Olá, </UserGreeting>
              <UserName>John Doe</UserName>
            </User>
          </UserInfo>
          <Icon name="power" />
        </UserWrapper>
      </Header>

      <HilightCarts>
        <HilightCart />
        <HilightCart />
        <HilightCart />
      </HilightCarts>
    </Container>
  );
};
