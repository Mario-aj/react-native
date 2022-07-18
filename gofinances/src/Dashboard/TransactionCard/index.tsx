import React from "react";
import {
  Container,
  Title,
  Amount,
  Icon,
  Footer,
  Category,
  CategoryName,
  Date,
} from "./styles";

type Category = {
  name: string;
  icon: string;
};

export type TransactionCardProps = {
  date: string;
  title: string;
  amount: string;
  category: Category;
  type: "positive" | "negative";
};

type Props = {
  data: TransactionCardProps;
};

export const TransactionCard = ({ data }: Props) => {
  return (
    <Container>
      <Title>{data.title}</Title>
      <Amount type={data.type}>
        {data.type === "positive" ? "+ " : "- "}
        {data.amount}
      </Amount>

      <Footer>
        <Category>
          <Icon name={data.category.icon} />
          <CategoryName>{data.category.name}</CategoryName>
        </Category>
        <Date>{data.date}</Date>
      </Footer>
    </Container>
  );
};
