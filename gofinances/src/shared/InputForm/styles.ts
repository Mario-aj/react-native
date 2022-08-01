import { RFValue } from "react-native-responsive-fontsize";
import styled, { css } from "styled-components/native";

export const Container = styled.View`
  width: 100%;
`;

export const Error = styled.Text(
  ({ theme }) => css`
    color: ${theme.colors.danger};
    font-size: ${RFValue(12)}px;
    font-family: ${theme.fonts.regular};
    margin-top: -12px;
    margin-bottom: 12px;
  `
);
