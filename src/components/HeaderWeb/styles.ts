import { Link } from "react-router-dom";
import styled from "styled-components";

export const Container = styled.header`
  height: 40px;
  width: 100%;
  height: 80px;
  background-color: ${({ theme }) => theme.colors.bright};
`;
export const Box = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  height: 100%;
  padding: 0 1em;
`;

export const Navegation = styled.nav`
  display: flex;
  align-items: center;
`;

export const logo = styled.img``;

export const Links = styled(Link)`
  text-decoration: none;
  color: ${({ theme }) => theme.colors["high-emphasis"]};
  font-size: ${({ theme }) => theme.fontSize["title-medium"]};
  font-weight: ${({ theme }) => theme.fontWeight["title-medium"]};
  width: 100%;
    &:nth-child(2){
        margin-left: 1.5em;
    }
    &:not(:last-child){
        margin-right: 1em;
    }
`;
export const ContainerSearchHeader = styled.div`
  display: flex;
  align-items: center;
  background-color: ${({theme}) => theme.colors.grey};
    width: 300px;
    height: 40px;
    border-radius: 4px;
    padding: 0 1em;
`;

export const Input = styled.input`
  background-color: transparent;
  outline: none;
  border: none;
  width: 100%;
  margin-left: .6em;
  font-size: ${({ theme }) => theme.fontSize["title-medium"]};
  font-weight: ${({ theme }) => theme.fontWeight["title-medium"]};
  color: ${({ theme }) => theme.colors["low-emphasis"]};
  margin-left: .8em;
  &::placeholder {
    font-size: ${({ theme }) => theme.fontSize["body-medium"]};
    font-weight: ${({ theme }) => theme.fontWeight["body-medium"]};
    color: ${({ theme }) => theme.colors["low-emphasis"]};
  }
`;

export const ButtonIcons = styled.button`
    cursor: pointer;
    background-color: transparent;
    border: none;
    outline: none;
`