import React from "react";
import { FlatList } from "react-native";
import { Button } from "../../shared/Button";
import { categories } from "../../utils/categories";

import {
  Container,
  Header,
  Title,
  CategoryItem,
  Icon,
  CategoryName,
  Separator,
  Footer,
} from "./styles";

type Category = {
  key: string;
  name: string;
};

type Props = {
  category: string;
  onSelect: (category: Category) => void;
  onClose: () => void;
};

export const CategorySelect = ({ category, onSelect, onClose }: Props) => {
  return (
    <Container>
      <Header>
        <Title>Selecione uma categoria</Title>
      </Header>

      <FlatList
        data={categories}
        style={{ flex: 1, width: "100%" }}
        keyExtractor={(item) => item.key}
        renderItem={({ item }) => (
          <CategoryItem>
            <Icon name={item.icon} />
            <CategoryName>{item.name}</CategoryName>
          </CategoryItem>
        )}
        ItemSeparatorComponent={() => <Separator />}
      />

      <Footer>
        <Button title="Selecionar" />
      </Footer>
    </Container>
  );
};
