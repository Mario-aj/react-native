import { RFValue } from "react-native-responsive-fontsize";
import styled from "styled-components/native";
import { TextInput } from "react-native";
import { css } from "styled-components";

export const Container = styled(TextInput)(
  ({ theme }) => css`
    width: 100%;
    padding: 18px 16px;

    font-family: ${theme.fonts.regular};
    font-size: ${RFValue(14)}px;
    color: ${theme.colors.text_dark};
    background-color: ${theme.colors.shape};
    border-radius: 6px;
    margin-bottom: 12px;
  `
);
