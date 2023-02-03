import { NavLink } from "react-router-dom";
import styled from "styled-components";
import { defaultTheme } from "../../styles/theme/defaultTheme";

export const ContainerTabs = styled(NavLink)`
  background-color: ${defaultTheme.colors.grey};
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: ${defaultTheme.fontSize.link};
  font-weight: ${defaultTheme.fontWeight.link};
  color: ${defaultTheme.colors["low-emphasis"]};
  width: 68px;
  height: 28px;
  text-decoration: none;
  &.active {
    background-color: ${defaultTheme.colors.primary};
    color: ${defaultTheme.colors.bright};
    border-radius: 8px;
  }
`;
