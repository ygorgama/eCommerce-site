import { Link } from "react-router-dom";
import styled from "styled-components";

export const Container = styled.footer`
  width: 100%;
  background-color: ${({ theme }) => theme.colors.primary};
`;

export const Box = styled.div`
  display: flex;
  padding: 2em 3em;
  justify-content: space-between;
`;

export const ContainerList = styled.div`
  display: flex;
`;

export const List = styled.ul`
  list-style: none;
  &:not(:last-child) {
    margin-right: 2em;
  }
`;
export const Itens = styled.li`
  font-size: ${({ theme }) => theme.fontSize["body-medium"]};
  font-weight: ${({ theme }) => theme.fontWeight["body-medium"]};
  &:first-of-type {
    color: ${({ theme }) => theme.colors.bright};
    margin-bottom: 0.8em;
  }
  &:not(:last-child) {
    margin-bottom: 0.6em;
  }
`;

export const Links = styled(Link)`
  color: ${({ theme }) => theme.colors["light-text"]};
  text-decoration: none;
`;

export const LinksSocialMedia = styled(Link)`
  &:not(:last-child) {
    margin-right: 0.6em;
  }
`;

export const IconLocation = styled.img`
  width: 20px;
  height: 20px;
  margin-right: 0.4em;
`;

export const Location = styled.span`
  font-size: ${({ theme }) => theme.fontSize["title-medium"]};
  font-weight: ${({ theme }) => theme.fontWeight["title-medium"]};
  color: ${({ theme }) => theme.colors.bright};
  margin-top: 0.6em;
  display: flex;
  align-items: center;
  justify-content: end;
  margin-bottom: .5em;
`;

export const Copyright = styled.span`
  font-size: ${({ theme }) => theme.fontSize["title-medium"]};
  font-weight: ${({ theme }) => theme.fontWeight["title-medium"]};
  color: ${({ theme }) => theme.colors["light-text"]};
`;

export const BoxInfos = styled.div`
    display: flex;
    flex-direction: column;
    align-items: end;
`