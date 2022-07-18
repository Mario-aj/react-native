import styled, { css } from "styled-components/native";
import { Feather } from "@expo/vector-icons";
import { RFValue } from "react-native-responsive-fontsize";

export const Container = styled.TouchableOpacity.attrs({
  activeOpacity: 0.5,
})(
  ({ theme }) => css`
    background-color: ${theme.colors.shape};
    flex-direction: row;
    align-items: center;
    justify-content: space-between;

    border-radius: 6px;
    padding: 18px 16px;
  `
);

export const Category = styled.Text(
  ({ theme }) => css`
    font-size: ${RFValue(14)}px;
    font-family: ${theme.fonts.regular};
  `
);

//@ts-ignore
export const Icon = styled(Feather)(
  ({ theme }) => css`
    font-size: ${RFValue(20)}px;
    color: ${theme.colors.text};
  `
);
