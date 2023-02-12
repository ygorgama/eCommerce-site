import { Link } from "react-router-dom";
import styled from "styled-components";
import { defaultTheme } from "../../styles/theme/defaultTheme";

export const ContainerHeaderWeb = styled.header`
  display: flex;
  align-items: center;
  height: 80px;
  background-color: ${defaultTheme.colors.bright};
  padding: 0 1.5em;
  justify-content: space-between;
`;

export const NavigationHeaderWeb = styled.nav`
  display: flex;
  align-items: center;
`;

export const ButtonsHeader = styled.button`
  background-color: transparent;
  border: none;
  outline: none;
`;

export const ActionDiv = styled.div`
  display: flex;
  align-items: center;
`;

export const List = styled.ul`
  display: flex;
  list-style: none;
`;

export const ListItem = styled.li`
  :not(:last-child) {
    margin-right: 1em;
  }
`;

export const LinksHeaderWeb = styled(Link)`
  text-decoration: none;
  color: ${defaultTheme.colors["high-emphasis"]};
  font-size: ${defaultTheme.fontSize["title-medium"]};
  font-weight: ${defaultTheme.fontWeight["title-medium"]};
`;

export const ContainerSearchHeaderWeb = styled.div`
  padding: 0 1em;
  display: flex;
  align-items: center;
  border-radius: 8px;
  height: 44px;
  width: 362px;
  background-color: ${defaultTheme.colors.grey};
  margin-right: 2em;
`;

export const InputSearchHeaderWeb = styled.input.attrs({ type: "search" })`
  background-color: transparent;
  border: none;
  outline: none;
  height: 100%;
  width: 100%;
  color: ${defaultTheme.colors["high-emphasis"]};
  font-size: ${defaultTheme.fontSize["title-medium"]};
  font-weight: ${defaultTheme.fontWeight["title-medium"]};
  :placeholder-shown {
    color: ${defaultTheme.colors["low-emphasis"]};
  }
`;

export const IconHeaderWeb = styled.img`
  width: 24px;
  height: 24px;
  :not(:last-child){
    margin-right: .6em;
  }
`;
