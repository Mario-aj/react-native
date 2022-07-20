import React from "react";

import { Container, Header, Title, Form, TransationsType } from "./styles";

import { TransactionTypeButton } from "../../shared/TransationTypeButton";
import { Button } from "../../shared/Button";
import { Input } from "../../shared/input";
import { Select } from "../../shared/Select";

export const Register = () => {
  const [transactionType, setTransactionType] = React.useState("");

  function handleSelectTransactionType(type: "income" | "outcome") {
    setTransactionType(type);
  }

  return (
    <Container>
      <Header>
        <Title>New Resgiter</Title>
      </Header>

      <Form>
        <Input placeholder="Name" placeholderTextColor="#ddd" />
        <Input placeholder="Price" placeholderTextColor="#ddd" />

        <TransationsType>
          <TransactionTypeButton
            type="income"
            title="Income"
            style={{ marginRight: 6 }}
            isSelected={transactionType === "income"}
            onPress={() => handleSelectTransactionType("income")}
          />
          <TransactionTypeButton
            type="outcome"
            title="Outcome"
            style={{ marginLeft: 6 }}
            isSelected={transactionType === "outcome"}
            onPress={() => handleSelectTransactionType("outcome")}
          />
        </TransationsType>

        <Select title="category" />
        <Button title="Send" />
      </Form>
    </Container>
  );
};
