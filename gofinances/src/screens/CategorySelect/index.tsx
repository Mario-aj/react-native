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
  category: Category;
  onSelect: (category: Category) => void;
  onClose: () => void;
};

export const CategorySelect = ({ category, onSelect, onClose }: Props) => {
  const handleSelect = (item: Category) => {
    console.log(item);
    onSelect(item);
  };
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
          <CategoryItem
            onPress={() => handleSelect(item)}
            isSelected={item.key === category.key}
          >
            <Icon name={item.icon} />
            <CategoryName>{item.name}</CategoryName>
          </CategoryItem>
        )}
        ItemSeparatorComponent={() => <Separator />}
      />

      <Footer>
        <Button title="Selecionar" onPress={onClose} />
      </Footer>
    </Container>
  );
};
