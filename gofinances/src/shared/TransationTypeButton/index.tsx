import React from "react";
import { TouchableOpacityProps } from "react-native";

import { Container, Icon, Title } from "./styles";

type Props = TouchableOpacityProps & {
  type: "income" | "outcome";
  title: string;
  isSelected: boolean;
};

const ICONS = {
  income: "arrow-up-circle",
  outcome: "arrow-down-circle",
};

export const TransactionTypeButton = ({
  type,
  title,
  isSelected,
  ...props
}: Props) => {
  return (
    <Container {...props} isSelected={isSelected} type={type}>
      <Icon name={ICONS[type]} type={type} />
      <Title>{title}</Title>
    </Container>
  );
};
