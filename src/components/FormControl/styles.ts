import styled from "styled-components";
import { defaultTheme } from "../../styles/theme/defaultTheme";

interface ContainerFormControlProps {
  isError: boolean;
  size: "full" | "lg" | "sm";
  isDisabled: boolean
}

export const ContainerFormControl = styled.div<ContainerFormControlProps>`
  display: flex;
  align-items: center;
  color: ${(props) =>
    props.isError ? defaultTheme.colors.error : defaultTheme.colors.primary};
  background-color: ${props => props.isDisabled ? defaultTheme.colors["light-text"] : defaultTheme.colors.grey};
  font-size: ${defaultTheme.fontSize["body-medium"]};
  font-weight: ${defaultTheme.fontWeight["body-medium"]};
  width: ${(props) => (props.size === "full" ? "100%" : "328px")};
  height: ${(props) => (props.size === "sm" ? "48px" : "56px")};
  border-radius: 8px;
  padding: 0 1em;
  :focus-within {
    border: 1px solid
      ${(props) =>
        props.isError
          ? defaultTheme.colors.error
          : defaultTheme.colors.primary};
  }
`;

export const InputFormControl = styled.input`
  color: ${defaultTheme.colors["high-emphasis"]};
  border: none;
  background-color: transparent;
  outline: none;
  font-size: ${defaultTheme.fontSize["body-medium"]};
  font-weight: ${defaultTheme.fontWeight["body-medium"]};
  :placeholder-shown {
    color: ${defaultTheme.colors["low-emphasis"]};
  }
`;

export const LabelContainer = styled.label`
  display: flex;
  flex-direction: column;
`;

export const ErrorMessageShow = styled.p`
  color: ${defaultTheme.colors.error};
  font-size: ${defaultTheme.fontSize["body-medium"]};
  font-weight: ${defaultTheme.fontWeight["body-medium"]};
`;
