import styled from "styled-components";
import style from "styled-components";
import { defaultTheme } from "../../styles/theme/defaultTheme";

export const AccordianStyle = styled.button`
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 100%;
  height: 48px;
  border: none;
  outline: none;
  transition: 0.4s;
  cursor: pointer;
`;

export const IconInverted = styled.img`
  transform: rotate(180deg);
`;

export const Label = styled.span`
  font-weight: ${defaultTheme.fontWeight["title-regular"]};
  font-size: ${defaultTheme.fontSize["title-regular"]};
`;
