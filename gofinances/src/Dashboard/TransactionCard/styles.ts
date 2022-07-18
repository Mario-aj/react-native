import { css } from "styled-components";
import { Feather } from "@expo/vector-icons";
import styled from "styled-components/native";
import { RFValue } from "react-native-responsive-fontsize";

export const Container = styled.View(
  ({ theme }) => css`
    background-color: ${theme.colors.shape};
    border-radius: 4px;
    padding: 18px 24px;
    margin-bottom: 16px;
  `
);

export const Title = styled.Text(
  ({ theme }) => css`
    font-family: ${theme.fonts.regular};
    font-size: ${RFValue(14)}px;
    margin-bottom: 2px;
  `
);

export const Amount = styled.Text(
  ({ theme }) => css`
    font-family: ${theme.fonts.regular};
    font-size: ${RFValue(20)}px;
    margin-bottom: 20px;
  `
);

export const Footer = styled.View`
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
`;

export const Category = styled.View`
  flex-direction: row;
  align-items: center;
`;

//@ts-ignore
export const Icon = styled(Feather)(
  ({ theme }) => css`
    font-size: ${RFValue(20)}px;
    color: ${theme.colors.text};
    margin-right: 16px;
  `
);

export const CategoryName = styled.Text(
  ({ theme }) => css`
    font-family: ${theme.fonts.regular};
    font-size: ${RFValue(14)}px;
    color: ${theme.colors.text};
  `
);

export const Date = styled.Text(
  ({ theme }) => css`
    font-family: ${theme.fonts.regular};
    font-size: ${RFValue(14)}px;
    color: ${theme.colors.text};
  `
);
