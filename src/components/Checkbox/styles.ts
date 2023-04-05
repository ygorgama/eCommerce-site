import styled from "styled-components";

interface ContainerProps {
    label?:string;
}

export const Container = styled.input.attrs({
  type: "checkbox",
})<ContainerProps>`
  appearance: none;
  font: inherit;
  height: 1.05em;
  width: 1.05em;
  cursor: pointer;
  border-radius: 0.15em;
  display: grid;
  place-content: center;
  transform: translateY(-0.075em);
  border: 2px solid ${({theme}) => theme.colors["low-emphasis"]};
  margin-right: .5em;
  &&:checked{
    border: none;
    background-color:${({theme})=> theme.colors.primary};
    &&::after{
        content: "✓";
        font-weight: 700;
        font-size: 14px;
        color: ${({theme})=> theme.colors.bright};
    }
  }
  &&:hover{
    border: ${({theme, label}) => label && `2px solid ${theme.colors.primary}`};
  }
  &&:disabled{
    border: ${({theme, label}) => label && `2px solid ${theme.colors.primary}`};
  }
`;

export const Box = styled.div`
  display: flex;
  align-items: center;
  font-size: ${({theme}) => theme.fontSize["body-medium"]};
  font-weight: ${({theme}) => theme.fontWeight["body-medium"]};
  color: ${({theme}) => theme.colors["low-emphasis"]};
`