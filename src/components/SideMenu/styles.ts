import { NavLink } from "react-router-dom";
import styled from "styled-components";
import { defaultTheme } from "../../styles/theme/defaultTheme";

export const ContainerLinks = styled(NavLink)`
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 100%;
  font-size: ${defaultTheme.fontSize["body-medium"]};
  font-weight: ${defaultTheme.fontWeight["body-medium"]};
  color: ${defaultTheme.colors.dark};
  text-decoration: none;
  width: 324px;
  &.active {
    color: ${defaultTheme.colors.primary};
  }
`;

export const SideMenuIcon = styled.img`
  width: 16px;
  height: 16px;
  transform: rotate(270deg);
`;

export const Divider = styled.div`
    width: 328px;
    height: 1px;
    background-color: ${defaultTheme.colors["light-text"]};
    margin-top: .3em;
`
