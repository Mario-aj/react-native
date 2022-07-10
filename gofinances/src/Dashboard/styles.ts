import styled from "styled-components/native";
import { css } from "styled-components";

export const Container = styled.View(
  ({ theme }) => css`
    flex: 1;
    align-items: center;
    justify-content: center;
    background: ${theme.colors.background};
  `
);

export const Title = styled.Text(
  ({ theme }) => css`
    font-size: 24px;
    color: ${theme.colors.title};
    font-weight: bold;
  `
);
