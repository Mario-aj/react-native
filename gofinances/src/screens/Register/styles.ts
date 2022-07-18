import { RFValue } from "react-native-responsive-fontsize";
import { css } from "styled-components";
import styled from "styled-components/native";

export const Container = styled.View(
  ({ theme }) => css`
    background-color: ${theme.colors.background};
    flex: 1;
  `
);

export const Header = styled.View(
  ({ theme }) => css`
    background-color: ${theme.colors.primary};

    width: 100%;
    height: ${RFValue(113)}px;

    align-items: center;
    justify-content: flex-end;
    padding-bottom: 18px;
  `
);

export const Title = styled.Text(
  ({ theme }) => css`
    color: ${theme.colors.shape};
    font-size: ${RFValue(18)}px;
    font-family: ${theme.fonts.regular};
  `
);

export const Form = styled.View`
  width: 100%;
  flex: 1;

  padding: 24px;
`;

export const TransationsType = styled.View`
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  margin-top: 8px;
`;
