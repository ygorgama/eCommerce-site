import { Link } from "react-router-dom";
import styled from "styled-components";
import { defaultTheme } from "../../styles/theme/defaultTheme";

export interface CotainerFooterMobileProps {
  showFooter: boolean;
}

export const ContainerAcoordian = styled.button`
  display: flex;
  outline: none;
  border: none;
  align-items: center;
  color: ${defaultTheme.colors["low-emphasis"]};
  font-size: ${defaultTheme.fontSize["title-medium"]};
  font-weight: ${defaultTheme.fontWeight["title-medium"]};
  background-color: ${defaultTheme.colors.bright};
  height: 48px;
  width: 100%;
  padding: 0 1em;
  justify-content: space-between;
  cursor: pointer;
`;

export const ListFooterMobileNoEdit = styled.ul`
  margin: 0;
  padding: 0;
  list-style: none;
`;

export const ContainerFooterMobile = styled.div<CotainerFooterMobileProps>`
  display: ${(props) => (props.showFooter ? "block" : "none")};
  height: 578px;
  background-color: ${defaultTheme.colors.primary};
  color: ${defaultTheme.colors.bright};
  font-size: ${defaultTheme.fontSize["title-medium"]};
  font-weight: ${defaultTheme.fontWeight["title-medium"]};
`;

export const FooterMobileItem = styled(Link)`
  color: ${defaultTheme.colors["light-text"]};
  text-decoration: none;
`;

export const ItensFooterMobile = styled.li`
  :first-child {
    color: ${defaultTheme.colors.bright};
    margin-bottom: -0.7em;
  }
  font-weight: ${defaultTheme.fontWeight["title-medium"]};
  font-size: ${defaultTheme.fontSize["title-medium"]};
  margin-bottom: 0.3em;
`;

export const ListFooterMobile = styled.ul`
  display: flex;
  align-items: center;
  flex-wrap: wrap;
  margin: 0;
  padding: 0;
  list-style: none;
  color: ${defaultTheme.colors.bright};
`;

export const Container = styled.div`
  padding: 0.2em 1.1em;
`;

export const SecondsItensFooterMobile = styled.li`
  :not(:last-child) {
    margin-right: 1em;
  }
  font-weight: ${defaultTheme.fontWeight["title-medium"]};
  font-size: ${defaultTheme.fontSize["title-medium"]};
`;

export const Titles = styled.h4`
  margin-top: 2.5em;
  margin-bottom: 0.4em;
`;

export const Divider = styled.div`
  width: 100%;
  background-color: ${defaultTheme.colors["primary-tint"]};
  height: 1px;
  margin-top: 2em;
`;

export const ContainerSocialMedia = styled.div`
  margin-top: 1.5em;
  margin-bottom: 1em;
`;

export const IconSocialMedia = styled.img`
  :not(:last-child) {
    margin-right: 0.9em;
  }
`;

export const ContainerFlex = styled.div`
  display: flex;
  align-items: center;
`;

export const Location = styled.div`
  margin-left: 0.5em;
`;

export const Directs = styled.div`
  color: ${defaultTheme.colors["light-text"]};
  margin-top: 1.5em;
`;
