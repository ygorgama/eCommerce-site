import styled from "styled-components";
import { defaultTheme } from "../../styles/theme/defaultTheme";

export const Icons = styled.img`
  :not(:last-child) {
    margin-right: 1em;
  }
`;

export const Container = styled.div`
box-sizing: border-box;
  display: flex;
  align-items: center;
  justify-content: space-between;
  background-color: ${defaultTheme.colors.bright};
  width: 100%;
  padding: 0 1em;
`;

export const ContainerFlex = styled.div`
  display: flex;
  align-items: center;
`;

export const Search = styled.p`
    font-size: ${defaultTheme.fontSize["display-small"]};
    font-weight: ${defaultTheme.fontWeight["display-small"]};
    color: ${defaultTheme.colors.primary};
`
export const PageTitle = styled.p`
    font-size: ${defaultTheme.fontSize["title-regular"]};
    font-weight: ${defaultTheme.fontWeight["title-regular"]};
    color: ${defaultTheme.colors.primary};
`

export const PageInfo= styled.p`
    font-size: 10px;
    font-weight: 500;
    color: ${defaultTheme.colors["low-emphasis"]};
`