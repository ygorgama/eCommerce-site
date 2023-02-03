import { NavLink } from "react-router-dom";
import styled from "styled-components";
import { defaultTheme } from "../../styles/theme/defaultTheme";

export const HorizontalMenuContainer = styled(NavLink)`
  display: flex;
  justify-content: center;

  align-items: center;
  width: 138px;
  height: 50px;
  background-color: ${defaultTheme.colors.grey};
  font-size: ${defaultTheme.fontSize["body-medium"]};
  font-weight: ${defaultTheme.fontWeight["body-medium"]};
  text-decoration: none;
  color: ${defaultTheme.colors["low-emphasis"]};
  &.active {
    background-color: ${defaultTheme.colors.bright};
    color: ${defaultTheme.colors["high-emphasis"]};
  }
`;
