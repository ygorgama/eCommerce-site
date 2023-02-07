import styled from "styled-components";
import { defaultTheme } from "../../styles/theme/defaultTheme";

export const Container = styled.div`
  display: flex;
  width: 100%;
  align-items: flex-end;
`;

export const ContainerSearchBar = styled.div`
  display: flex;
  align-items: flex-end;
  background-color: ${defaultTheme.colors.grey};
  height: 40px;
  border-radius: 4px;
  width: 296px;
`;

export const InputSeachBar = styled.input.attrs({
  type: "search",
})`
  background-color: transparent;
  color: ${defaultTheme.colors["low-emphasis"]};
  outline: none;
  border: none;
  font-size: ${defaultTheme.fontSize["title-medium"]};
  font-weight: ${defaultTheme.fontWeight["title-medium"]};
  margin-left: .5em;
  width: 80%;
  height: 70%;
`;

export const Icon = styled.img`
  transform: rotate(90deg);
  margin-right: .5em;
`;
