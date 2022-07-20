import React from "react";
import {} from "react-native";

import { Container, Category, Icon } from "./styles";

type Props = {
  title: string;
};

export const Select = ({ title }: Props) => {
  return (
    <Container>
      <Category>{title}</Category>
      <Icon name="chevron-down" />
    </Container>
  );
};
