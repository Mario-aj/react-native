import React from "react";
import { Control, Controller } from "react-hook-form";
import { TextInputProps } from "react-native";
import { Input } from "../input";

import { Container } from "./styles";

type Props = TextInputProps & {
  name: string;
  control: Control;
};

export const InputForm = ({ name, control, ...props }: Props) => {
  return (
    <Container>
      <Controller
        name={name}
        control={control}
        render={({ field: { onChange, value } }) => (
          <Input {...props} onChangeText={onChange} value={value} />
        )}
      />
    </Container>
  );
};
