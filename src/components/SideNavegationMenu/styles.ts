import { NavLink } from "react-router-dom";
import styled from "styled-components";

export const Container = styled(NavLink)`
  width: 100%;
  text-decoration: none;
  color: ${({ theme }) => theme.colors.dark};
  font-size: ${({ theme }) => theme.fontSize["body-medium"]};
  font-weight: ${({ theme }) => theme.fontWeight["body-medium"]};
  display: flex;
  align-items: center;
  justify-content: space-between;
  &.active {
    color: ${({ theme }) => theme.colors.primary};
  }
`;

export const Separator = styled.div`
margin-top: .2em;
  width: 100%;
  height: 1px;
  background-color: ${({ theme }) => theme.colors.grey};
`;
