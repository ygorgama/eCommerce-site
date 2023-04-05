import { NavLink } from "react-router-dom";
import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  align-items: center;
`;

export const LinkBreadcrumbs = styled(NavLink)`
  text-decoration: none;
  font-size: ${(props) => props.theme.fontSize["body-medium"]};
  font-weight: ${(props) => props.theme.fontWeight["body-medium"]};
  color: ${({ theme }) => theme.colors.primary};
    cursor: pointer;
  &.active {
    color: ${({ theme }) => theme.colors["low-emphasis"]};
    cursor: default;
  }
  &:not(last-child){
    margin-right: 1em;
  }
`;

export const IconBreadcrumbs = styled.img`
    width: 15px;
    height: 15px;
    margin-right: 1em;
`
