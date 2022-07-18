import { TouchableOpacity } from "react-native";
import { RFValue } from "react-native-responsive-fontsize";
import styled, { css } from "styled-components/native";

export const Container = styled(TouchableOpacity)(
  ({ theme }) => css`
    background-color: ${theme.colors.secondary};
    width: 100%;
    align-items: center;

    border-radius: 6px;

    padding: 18px;
    margin-top: auto;
  `
);

export const Title = styled.Text(
  ({ theme }) => css`
    font-family: ${theme.fonts.medium};
    font-size: ${RFValue(14)}px;
    color: ${theme.colors.shape};
  `
);
