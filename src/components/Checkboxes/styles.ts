import styled from "styled-components";
import { defaultTheme } from "../../styles/theme/defaultTheme";
import { BsCheckLg } from "react-icons/bs";

interface CheckboxStyleProps {
  label?: string;
}


export const CheckboxStyle = styled.input.attrs({
  type: "checkbox",
})<CheckboxStyleProps>`
  appearance: none;
  font: inherit;
  background-color: ${defaultTheme.colors.bright};
  border: 2px solid
    ${(props) =>
      props.label
        ? defaultTheme.colors.primary
        : defaultTheme.colors["low-emphasis"]};
  color: ${defaultTheme.colors["low-emphasis"]};
  height: 1.05em;
  width: 1.05em;
  border-radius: 0.15em;
  display: grid;
  place-content: center;
  transform: translateY(-0.075em);
  cursor: pointer;
  margin-right: .4em;
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
`;

export const LabelStyle = styled.label`
  font-size: ${defaultTheme.fontSize["body-medium"]};
  font-weight: ${defaultTheme.fontWeight["body-medium"]};
  color: ${defaultTheme.colors["low-emphasis"]};
  display: flex;
  align-items: center;
`;
