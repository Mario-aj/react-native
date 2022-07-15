import { css } from "styled-components";
import { Feather } from "@expo/vector-icons";
import styled from "styled-components/native";
import { RFValue } from "react-native-responsive-fontsize";

type TypeProps = {
  type: "income" | "outcome" | "total";
};

export const Container = styled.View<TypeProps>(
  ({ theme, type }) => css`
    width: ${RFValue(300)}px;

    background: ${type === "total"
      ? theme.colors.secondary
      : theme.colors.shape};
    border-radius: 4px;

    padding: 18px 22px;
    padding-bottom: ${RFValue(42)}px;
    margin: 0 8px;
  `
);

export const Header = styled.View`
  flex-direction: row;
  justify-content: space-between;
`;

export const Title = styled.Text<TypeProps>(
  ({ theme, type }) => css`
    font-family: ${theme.fonts.regular};
    font-size: ${RFValue(14)}px;
    color: ${type === "total" ? theme.colors.shape : theme.colors.text_dark};
  `
);

//@ts-ignore
export const Icon = styled(Feather)<TypeProps>(
  ({ theme, type }) => css`
    font-size: ${RFValue(44)}px;
    ${type === "total" &&
    css`
      color: ${theme.colors.shape};
    `}

    ${type === "income" &&
    css`
      color: ${theme.colors.success};
    `}

    ${type === "outcome" &&
    css`
      color: ${theme.colors.danger};
    `}
  `
);

export const Content = styled.View``;

export const Amount = styled.Text<TypeProps>(
  ({ theme, type }) => css`
    font-family: ${theme.fonts.medium};
    font-size: ${RFValue(32)}px;
    color: ${type === "total" ? theme.colors.shape : theme.colors.text_dark};

    margin-top: 38px;
  `
);

export const LastTransaction = styled.Text<TypeProps>(
  ({ theme, type }) => css`
    font-family: ${theme.fonts.regular};
    font-size: ${RFValue(12)}px;
    color: ${type === "total" ? theme.colors.shape : theme.colors.text};
  `
);
