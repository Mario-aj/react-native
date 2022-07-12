import styled from "styled-components/native";
import { css } from "styled-components";
import { Feather } from "@expo/vector-icons";
import { RFPercentage, RFValue } from "react-native-responsive-fontsize";

export const Container = styled.View(
  ({ theme }) => css`
    flex: 1;
    background: ${theme.colors.background};
  `
);

export const Header = styled.View(
  ({ theme }) => css`
    width: 100%;
    height: ${RFPercentage(42)}px;
    background: ${theme.colors.primary};

    align-items: center;
    justify-content: center;
  `
);

export const UserWrapper = styled.View`
  width: 100%;
  padding: 0 24px;

  flex-direction: row;
  justify-content: space-between;
  align-items: center;
`;

export const UserInfo = styled.View`
  flex-direction: row;
  align-items: center;
`;

export const UserAvatar = styled.Image`
  width: ${RFValue(48)}px;
  height: ${RFValue(48)}px;
  border-radius: 8px;
`;
export const User = styled.View`
  margin-left: 14px;
`;
export const UserGreeting = styled.Text(
  ({ theme }) => css`
    color: ${theme.colors.shape};

    font-size: ${RFValue(18)}px;
    font-family: ${theme.fonts.regular};
  `
);
export const UserName = styled.Text(
  ({ theme }) => css`
    color: ${theme.colors.shape};

    font-size: ${RFValue(18)}px;
    font-family: ${theme.fonts.bold};
  `
);

//@ts-ignore
export const Icon = styled(Feather)(
  ({ theme }) => css`
    color: ${theme.colors.secondary};
    font-size: ${RFValue(24)}px;
  `
);
