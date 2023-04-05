import styled from "styled-components";

interface ContainerProps {
  size: "full" | "lg" | "sm";
  color: "primary" | "secondary" | "outline";
}

export const Container = styled.button<ContainerProps>`
  outline: none;
  border: ${(props) =>
    props.color === "outline"
      ? `2px solid ${props.theme.colors.primary}`
      : "none"};
  cursor: pointer;
  display: flex;
  border-radius: 8px;
  width: ${(props) =>
    props.size === "full" ? "100%" : props.size === "lg" ? "328px" : "136px"};
  height: 44px;
  justify-content: center;
  align-items: center;
  background-color: ${(props) =>
    props.color === "primary"
      ? props.theme.colors.primary
      : props.color === "secondary"
      ? props.theme.colors.accent
      : props.theme.colors.bright};
  color: ${(props) =>
    props.color === "primary"
      ? props.theme.colors.bright
      : props.theme.colors.primary};
  font-size: ${(props) => props.theme.fontSize["title-regular"]};
  font-weight: ${(props) => props.theme.fontWeight["title-regular"]};
  &&:focus {
    background-color: ${(props) =>
      props.color === "primary" && props.theme.colors["primary-tint"]};
    color: ${(props) =>
      props.color !== "primary" && props.theme.colors["primary-tint"]};
  }
  &&:disabled {
    cursor: not-allowed;
    background-color: ${(props) =>
      props.color !== "outline" && props.theme.colors.grey};
    border: ${(props) =>
      props.color === "outline"
        ? `2px solid ${props.theme.colors["light-text"]}`
        : "none"};
  }
  &&:hover{
    border: 2px solid ${props => props.theme.colors["primary-tint"]};
  }
`;
