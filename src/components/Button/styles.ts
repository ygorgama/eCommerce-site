import styled from "styled-components";
import { defaultTheme } from "../../styles/theme/defaultTheme";

export interface ButtonStyleProps {
  size: "full" | "lg" | "sm" | "chip";
  color: "primary" | "secondary" | "outline";
}

export const ButtonStyle = styled.button<ButtonStyleProps>`
  border-radius: 8px;
  outline: none;
  background-color: ${(props) =>
    props.color === "primary"
      ? defaultTheme.colors.primary
      : props.color === "secondary"
      ? defaultTheme.colors.accent
      : defaultTheme.colors.bright};
  width: ${(props) =>
    props.size === "full"
      ? "100%"
      : props.size === "lg"
      ? "328px"
      : props.size === "sm"
      ? "136px"
      : "105px"};
  border: ${(props) =>
    props.color === "outline"
      ? `2px solid ${defaultTheme.colors.primary}`
      : "none"};
  display: flex;
  align-items: center;
  justify-content: center;
  height: ${(props) => (props.size === "chip" ? "32px" : "44px")};
  cursor: pointer;
  color: ${(props) =>
    props.color === "primary"
      ? defaultTheme.colors.bright
      : defaultTheme.colors.primary};
  font-weight: ${(props) => (props.size === "chip" ? "500" : "600")};
  font-size: ${defaultTheme.fontSize["label-large"]};
  transition: 0.3s;
  :hover {
    background-color: ${(props) =>
      props.color === "primary" && defaultTheme.colors["primary-tint"]};
    opacity: 0.8;
    transition: 0.3s;
  }
  :focus {
    border: 2px solid ${defaultTheme.colors["primary-tint"]};
  }
  :disabled{
    color: ${defaultTheme.colors["light-text"]};
    background-color: ${props => props.color !== 'outline' && defaultTheme.colors.grey};
   border: ${props => props.color === 'outline' && `2px solid ${defaultTheme.colors.grey}`};

  }
`;
