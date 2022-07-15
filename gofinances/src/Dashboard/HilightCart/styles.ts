import { css } from "styled-components";
import { Feather } from "@expo/vector-icons";
import styled from "styled-components/native";
import { RFValue } from "react-native-responsive-fontsize";

export const Container = styled.View(
  ({ theme }) => css`
    width: ${RFValue(300)}px;

    background: ${theme.colors.shape};
    border-radius: 4px;

    padding: 18px 22px;
    padding-bottom: ${RFValue(42)}px;
    margin: 0 16px;
  `
);

export const Header = styled.View`
  flex-direction: row;
  justify-content: space-between;
`;

export const Title = styled.Text(
  ({ theme }) => css`
    font-family: ${theme.fonts.regular};
    font-size: ${RFValue(14)}px;
    color: ${theme.colors.text_dark};
  `
);

//@ts-ignore
export const Icon = styled(Feather)`
  font-size: ${RFValue(44)}px;
`;

export const Content = styled.View``;

export const Amount = styled.Text(
  ({ theme }) => css`
    font-family: ${theme.fonts.medium};
    font-size: ${RFValue(32)}px;
    color: ${theme.colors.text_dark};

    margin-top: 38px;
  `
);

export const LastTransaction = styled.Text(
  ({ theme }) => css`
    font-family: ${theme.fonts.regular};
    font-size: ${RFValue(12)}px;
    color: ${theme.colors.text};
  `
);
