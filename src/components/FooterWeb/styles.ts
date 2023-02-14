import { Link } from "react-router-dom";
import styled from "styled-components";
import { defaultTheme } from "../../styles/theme/defaultTheme";

export const ContainerFooterWeb = styled.div`
  width: 100%;
  background-color: ${defaultTheme.colors.primary};
  height: 342px;
  display: flex;
  padding: 1em;
  justify-content: space-between;
`;
export const ItensFooterWeb = styled.li`
  :first-child {
    color: ${defaultTheme.colors.bright};
    margin-bottom: 0.7em;
  }
  font-weight: ${defaultTheme.fontWeight["body-medium"]};
  font-size: ${defaultTheme.fontSize["body-medium"]};
  margin-bottom: 0.3em;
`;

export const LinkFooterWeb = styled(Link)`
  color: ${defaultTheme.colors["light-text"]};
  text-decoration: none;
`;

export const LinkSocialMedia = styled(Link)`
  :not(:last-child) {
    margin-right: 1em;
  }
`;

export const FirstLinkFooterWeb = styled(Link)`
  color: ${defaultTheme.colors.bright};
  text-decoration: none;
`;

export const ListFooter = styled.ul`
  list-style: none;
`;

export const Container = styled.div`
  display: flex;
  align-items: flex-start;
`;

export const ContainerFlex = styled.div`
  display: flex;
  align-items: center;
  margin: 1.6em 0 .7em 0;
`;

export const ContainerSecondItens = styled.div`
  padding: 1em 2em;
  display: flex;
  flex-direction: column;
  align-items: flex-end;
  font-weight: ${defaultTheme.fontWeight["title-medium"]};
  font-size: ${defaultTheme.fontSize["title-medium"]};
`;

export const Place = styled.span`
  margin-left: 0.4em;
  color: ${defaultTheme.colors.bright};

`;

export const Copyright = styled.span`
  color: ${defaultTheme.colors["light-text"]};
`;
