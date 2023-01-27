import styled from "styled-components";
import { defaultTheme } from "../../styles/theme/defaultTheme";

export const CheckboxStyle = styled.input.attrs({
  type: "checkbox",
})`
  appearance: none;
  font: inherit;
  background-color: ${defaultTheme.colors.bright};
  border: 2px solid ${defaultTheme.colors["low-emphasis"]};
  width: 0.8em;
  color: ${defaultTheme.colors["low-emphasis"]};
  height: 0.8em;
  border-radius: 0.15em;
  display: grid;
  place-content: center;
  transform: translateY(-0.075em);

  cursor: pointer;
  :before {
    content: "";
    width: 0.65em;
    height: 0.65em;
    transform: scale(0);
    transition: 120ms transform ease-in-out;
  }
  :checked {
    background-color: ${defaultTheme.colors.primary};
  }
`;
