import { NavLink } from "react-router-dom";
import styled from "styled-components";
import { defaultTheme } from "../../styles/theme/defaultTheme";

export const TabWebStyle = styled(NavLink)`
  font-size: ${defaultTheme.fontSize["body-medium"]};
  font-weight: ${defaultTheme.fontWeight["body-medium"]};
  color: ${defaultTheme.colors.primary};
  text-decoration: none;
  &.active {
    color: ${defaultTheme.colors["low-emphasis"]};
  }
`;
