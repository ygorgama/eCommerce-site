import { NavLink } from "react-router-dom";
import styled from "styled-components";
import { defaultTheme } from "../../styles/theme/defaultTheme";

interface ContainerProps {
  theme: "primary" | "bright";
}

export const Container = styled(NavLink)<ContainerProps>`
  background-color: ${({ theme }) =>
    theme === "primary"
      ? defaultTheme.colors.primary
      : defaultTheme.colors.bright};
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  cursor: pointer;
  width: 90px;
  height: 56px;
  text-decoration: none;
  color: ${({ theme }) =>
    theme === "primary"
      ? defaultTheme.colors.bright
      : defaultTheme.colors.primary};
  font-size: ${defaultTheme.fontSize.link};
  font-weight: ${defaultTheme.fontWeight["label-large"]};
`;
