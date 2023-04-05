import { NavLink } from "react-router-dom";
import styled from "styled-components";

export const Container = styled(NavLink)`
  text-decoration: none;
  background-color: ${({ theme }) => theme.colors.grey};
  color: ${({ theme }) => theme.colors["low-emphasis"]};
    padding: .4em .9em;
  &.active {
    border-radius: 8px;
    background-color: ${({ theme }) => theme.colors.primary};
    color: ${({ theme }) => theme.colors.bright};
  }
`;
