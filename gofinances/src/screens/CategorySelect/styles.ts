import { RFValue } from "react-native-responsive-fontsize";
import styled, { css } from "styled-components/native";
import { Feather } from "@expo/vector-icons";

type CategoryProps = {
  isSelected: boolean;
};

export const Container = styled.View(
  ({ theme }) => css`
    flex: 1;
    background-color: ${theme.colors.background};
  `
);

export const Header = styled.View(
  ({ theme }) => css`
    width: 100%;
    height: ${RFValue(113)}px;

    background-color: ${theme.colors.primary};

    align-items: center;
    justify-content: flex-end;
    padding-bottom: 20px;
  `
);

export const Title = styled.Text(
  ({ theme }) => css`
    font-family: ${theme.fonts.regular};
    font-size: ${RFValue(18)}px;
    color: ${theme.colors.shape};
  `
);

export const CategoryItem = styled.TouchableOpacity<CategoryProps>`
  width: 100%;
  padding: ${RFValue(16)}px;

  flex-direction: row;
  align-items: center;

  background-color: ${({ isSelected, theme }) =>
    isSelected ? theme.colors.secondary_light : theme.colors.background};
`;

//@ts-ignore
export const Icon = styled(Feather)`
  font-size: ${RFValue(20)}px;
  margin-right: 16px;
`;

export const CategoryName = styled.Text`
  font-family: ${({ theme }) => theme.fonts.regular};
  font-size: ${RFValue(14)}px;
`;

export const Separator = styled.View`
  width: 100%;
  height: 1px;
  background-color: ${({ theme }) => theme.colors.text};
`;

export const Footer = styled.View`
  width: 100%;
  padding: 24px;
`;
