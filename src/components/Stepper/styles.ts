
import styled from "styled-components";
import { defaultTheme } from "../../styles/theme/defaultTheme";

export const ButtonStepper = styled.button`
  border: none;
  outline: none;
  background-color: transparent;
  width: 30px;
  height: 30px;
  color: ${defaultTheme.colors["high-emphasis"]};
  font-weight: 700;
  font-size: 20px;
  cursor: pointer;
  :hover {
    background-color: ${defaultTheme.colors.primary};
    color: ${defaultTheme.colors.bright};
  font-size: 28px;
  }
`;

export const ContainerStepper = styled.div`
  background-color: ${defaultTheme.colors.bright};
  border: 1px solid ${defaultTheme.colors.primary};
  width: 79px;
  display: flex;
  align-items:center ;
  justify-content: space-between;
  border-radius: 8px;
`;

export const InputStepper = styled.input`
    border: none;
    background-color: transparent;
    width: 10px;
    font-size: ${defaultTheme.fontSize["body-regular"]};
    color: ${defaultTheme.colors["high-emphasis"]};
    
`
