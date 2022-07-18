import { TouchableOpacity } from "react-native";
import styled, { css } from "styled-components/native";
import { Feather } from "@expo/vector-icons";
import { RFValue } from "react-native-responsive-fontsize";

type IconProps = {
  type: "income" | "outcome";
};

type ContainerProps = IconProps & {
  isSelected: boolean;
};

export const Container = styled(TouchableOpacity)<ContainerProps>(
  ({ theme, isSelected, type }) => css`
    flex-direction: row;
    align-items: center;
    justify-content: center;

    border: ${isSelected ? 0 : 1.5}px solid ${theme.colors.text};
    border-radius: 6px;

    padding: 16px;
    flex: 1;
    ${isSelected &&
    type === "income" &&
    css`
      background-color: ${theme.colors.success_light};
    `};
    ${isSelected &&
    type === "outcome" &&
    css`
      background-color: ${theme.colors.danger_light};
    `};
  `
);

//@ts-ignore
export const Icon = styled(Feather)<IconProps>(
  ({ theme, type }) => css`
    margin-right: 12px;
    font-size: ${RFValue(24)}px;
    color: ${type === "income" ? theme.colors.success : theme.colors.danger};
  `
);

export const Title = styled.Text(
  ({ theme }) => css`
    font-size: ${RFValue(14)}px;
    font-family: ${theme.fonts.regular};
  `
);
