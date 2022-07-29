import React from "react";

import { Container, Category, Icon } from "./styles";

type Props = {
  title: string;
  onPress: () => void;
};

export const Select = ({ title, onPress }: Props) => {
  return (
    <Container onPress={onPress}>
      <Category>{title}</Category>
      <Icon name="chevron-down" />
    </Container>
  );
};
