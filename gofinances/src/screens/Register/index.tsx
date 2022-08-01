import React from "react";
import { Alert, Keyboard, Modal, TouchableWithoutFeedback } from "react-native";
import { yupResolver } from "@hookform/resolvers/yup";
import { useForm } from "react-hook-form";
import * as Yup from "yup";

import { Container, Header, Title, Form, TransationsType } from "./styles";

import { TransactionTypeButton } from "../../shared/TransationTypeButton";
import { CategorySelect } from "../CategorySelect";
import { InputForm } from "../../shared/InputForm";
import { Button } from "../../shared/Button";
import { Select } from "../../shared/Select";

type FormData = { name: string; amount: string };

const schema = Yup.object().shape({
  name: Yup.string().required("O nome é obrigatório"),
  amount: Yup.number()
    .typeError("O valor deve ser um número")
    .positive("O valor deve ser positivo")
    .required("O valor é obrigatório"),
});

export const Register = () => {
  const {
    control,
    handleSubmit: onSubmit,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(schema),
  });
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

  const handleSubmit = React.useCallback(
    (form: Record<string, FormData>) => {
      if (!transactionType) {
        return Alert.alert("Selecione o tipo de transação");
      }

      if (category.key === "category") {
        return Alert.alert("Selecione uma categoria");
      }

      const data = {
        ...form,
        type: transactionType,
        category: category.key,
      };

      console.log({ data });
    },
    [category, transactionType]
  );

  return (
    <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
      <Container>
        <Header>
          <Title>New Resgiter</Title>
        </Header>

        <Form>
          <InputForm
            control={control}
            name="name"
            placeholder="Name"
            placeholderTextColor="#ddd"
            autoCorrect={false}
            autoCapitalize="sentences"
            //@ts-ignore
            error={errors?.name?.message}
          />
          <InputForm
            control={control}
            name="amount"
            placeholder="Price"
            placeholderTextColor="#ddd"
            keyboardType="numeric"
            //@ts-ignore
            error={errors?.amount?.message}
          />

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
          <Button title="Send" onPress={onSubmit(handleSubmit)} />
        </Form>

        <Modal visible={modalVisibility} transparent animationType="slide">
          <CategorySelect
            onSelect={setCategory}
            onClose={handleCloseModal}
            category={category}
          />
        </Modal>
      </Container>
    </TouchableWithoutFeedback>
  );
};
