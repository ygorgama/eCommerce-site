import styled from "styled-components";

interface ContainerProps {
  label?: string;
}

export const Container = styled.input.attrs({
  type: "checkbox",
})<ContainerProps>`
  appearance: none;
  font: inherit;
  height: 1.3em;
  width: 1.3em;
  cursor: pointer;
  border-radius: 50%;
  display: grid;
  place-content: center;
  transform: translateY(-0.075em);
  border: 2px solid ${({ theme }) => theme.colors["low-emphasis"]};
  margin-right: 0.5em;
  &&:checked {
    border: 2px solid ${({ theme }) => theme.colors.primary};
    &&::after {
      content: "⬤";
      font-weight: 700;
      font-size: 12px;
  
      color: ${({ theme }) => theme.colors.primary};
    }
  }
  &&:hover {
    border: 2px solid ${({ theme }) => theme.colors.primary};
  }
  &&:disabled {
    border: 2px solid ${({ theme }) => theme.colors["light-text"]};
  }
  
`;

export const Box = styled.div<ContainerProps>`
  display: flex;
  align-items: center;
  font-size: ${({ theme }) => theme.fontSize["body-medium"]};
  font-weight: ${({ theme }) => theme.fontWeight["body-medium"]};
  color: ${({ theme }) => theme.colors["low-emphasis"]};
  &:disabled {
    color: ${({ theme }) => theme.colors["light-text"]};
  }
`;
