import styled from "styled-components/native";
import { css } from "styled-components";
import { Feather } from "@expo/vector-icons";
import { RFPercentage, RFValue } from "react-native-responsive-fontsize";
import { getStatusBarHeight } from "react-native-iphone-x-helper";

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
  `
);

export const UserWrapper = styled.View`
  width: 100%;
  padding: 0 24px;
  margin-top: ${getStatusBarHeight() + RFValue(24)}px;

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

export const HilightCards = styled.ScrollView.attrs({
  horizontal: true,
  showsHorizontalScrollIndicator: false,
  contentContainerStyle: {
    paddingHorizontal: 16,
  },
})`
  width: 100%;

  position: absolute;
  margin-top: ${RFPercentage(20)}px;
`;

export const Transctions = styled.View`
  flex: 1;
  padding: 0 24px;
  margin-top: ${RFPercentage(12)}px;
`;

export const Title = styled.Text(
  ({ theme }) => css`
    font-family: ${theme.fonts.medium};
    font-size: ${RFValue(18)}px;
    margin-bottom: 16px;
  `
);

export const TransctionList = styled.FlatList``;
