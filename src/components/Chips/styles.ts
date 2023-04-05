import styled from "styled-components";

interface ContainerProps {}

export const Container = styled.button<ContainerProps>`
  outline: none;
  border: none;
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 8px;
  background-color: ${(props) => props.theme.colors.accent};
  color: ${(props) => props.theme.colors.dark};
  font-size: ${(props) => props.theme.fontSize["title-medium"]};
  font-weight: ${(props) => props.theme.fontWeight["title-medium"]};
  padding: 0 1.5em;
  height: 32px;
  &&:hover {
    background-color: ${(props) => props.theme.colors.grey};
  }
  &&:focus{
    background-color: ${(props) => props.theme.colors.grey};
    border: 2px solid ${(props) => props.theme.colors.primary};

  }
  &&:disabled{
    background-color: ${(props) => props.theme.colors["light-text"]};
    color: ${ props => props.theme.colors.grey};
    cursor: not-allowed;
    border: none;
  }
`;
