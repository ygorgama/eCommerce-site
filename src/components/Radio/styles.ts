import styled from "styled-components";
import { defaultTheme } from "../../styles/theme/defaultTheme";

export const RadioStyle = styled.input.attrs({
  type: "radio",
})`
  appearance: none;
  font: inherit;
  background-color: ${defaultTheme.colors.bright};
  border: 2px solid ${defaultTheme.colors["low-emphasis"]};
  color: ${defaultTheme.colors["low-emphasis"]};
  height: 1.1em;
  width: 1.1em;
  border-radius: 50%;
  display: flex;
  place-content: center;
  align-items: flex-end;
  justify-content: center;
  transform: translateY(-0.075em);
  cursor: pointer;
  margin-right: 0.4em;
  :checked {
    background-color: ${defaultTheme.colors.bright};
    border: 2px solid ${defaultTheme.colors.primary};
    ::after {
      content: "⬤";
      color: ${defaultTheme.colors.primary};
      font-weight: 700;
      font-size: 12px;
    }
  }
  :hover {
    border: 2px solid ${defaultTheme.colors.primary};
  }
  :disabled {
    border: 2px solid ${defaultTheme.colors["light-text"]};
    cursor: not-allowed;
  }
`;
