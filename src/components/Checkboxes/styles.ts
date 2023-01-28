import styled from "styled-components";
import { defaultTheme } from "../../styles/theme/defaultTheme";
import { BsCheckLg } from "react-icons/bs";

interface CheckboxStyleProps {
  label?: string;
}

interface LabelStyleProps {
  isDisable: boolean;
}

export const CheckboxStyle = styled.input.attrs({
  type: "checkbox",
})<CheckboxStyleProps>`
  appearance: none;
  font: inherit;
  background-color: ${defaultTheme.colors.bright};
  border: 2px solid ${defaultTheme.colors["low-emphasis"]};
  color: ${defaultTheme.colors["low-emphasis"]};
  height: 1.05em;
  width: 1.05em;
  border-radius: 0.15em;
  display: grid;
  place-content: center;
  transform: translateY(-0.075em);
  cursor: pointer;
  margin-right: 0.4em;
  :checked {
    background-color: ${defaultTheme.colors.primary};
    border: none;
    ::after {
      content: "✓";
      color: ${defaultTheme.colors.bright};
      font-weight: 700;
      font-size: 12px;
    }
  }
  :hover {
    border: ${(props) =>
      props.label && `2px solid ${defaultTheme.colors.primary}`};
  }
  :disabled {
    border: 2px solid ${defaultTheme.colors["light-text"]};
  }
`;

export const LabelStyle = styled.label<LabelStyleProps>`
  font-size: ${defaultTheme.fontSize["body-medium"]};
  font-weight: ${defaultTheme.fontWeight["body-medium"]};
  color: ${(props) =>
    props.isDisable
      ? defaultTheme.colors["light-text"]
      : defaultTheme.colors["low-emphasis"]};
  display: flex;
  align-items: center;
  width: min-content;
`;
