import React from "react";

import { Container, Header, Title, Form } from "./styles";

import { Button } from "../../shared/Button";
import { Input } from "../../shared/input";

export const Register = () => {
  return (
    <Container>
      <Header>
        <Title>New Resgiter</Title>
      </Header>

      <Form>
        <Input placeholder="Name" placeholderTextColor="#ddd" />
        <Input placeholder="Price" placeholderTextColor="#ddd" />

        <Button title="Send" />
      </Form>
    </Container>
  );
};
