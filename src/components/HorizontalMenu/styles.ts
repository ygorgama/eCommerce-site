import { NavLink } from "react-router-dom";
import styled from "styled-components";

export const Container = styled(NavLink)`
  width: 136px;
  height: 50px;
  text-decoration: none;
  color: ${({ theme }) => theme.colors["low-emphasis"]};
  font-size: ${({ theme }) => theme.fontSize["body-medium"]};
  font-weight: ${({ theme }) => theme.fontWeight["body-medium"]};
  display: flex;
  align-items: center;
  background-color: ${({ theme }) => theme.colors.grey};
  justify-content: center;
   &.active {
    color: ${({ theme }) => theme.colors["high-emphasis"]};
    background-color: ${({ theme }) => theme.colors.bright};
  }
`;
