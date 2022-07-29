import React from "react";
import { Modal } from "react-native";

import { Container, Header, Title, Form, TransationsType } from "./styles";

import { TransactionTypeButton } from "../../shared/TransationTypeButton";
import { CategorySelect } from "../CategorySelect";
import { Button } from "../../shared/Button";
import { Select } from "../../shared/Select";
import { Input } from "../../shared/input";

export const Register = () => {
  const [transactionType, setTransactionType] = React.useState("");
  const [modalVisibility, setModalVisibility] = React.useState(false);
  const [category, setCategory] = React.useState({
    key: "category",
    name: "category",
  });

  function handleSelectTransactionType(type: "income" | "outcome") {
    setTransactionType(type);
  }

  const handleOpenModal = React.useCallback(() => {
    setModalVisibility(true);
  }, []);

  const handleCloseModal = React.useCallback(() => {
    setModalVisibility(false);
  }, []);

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

        <Select title={category.name} onPress={handleOpenModal} />
        <Button title="Send" />
      </Form>

      <Modal visible={modalVisibility}>
        <CategorySelect
          onSelect={setCategory}
          onClose={handleCloseModal}
          category={category}
        />
      </Modal>
    </Container>
  );
};
