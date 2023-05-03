import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  align-items: center;
  border: 2px solid ${({ theme }) => theme.colors.primary};
  border-radius: 8px;
  width: 79px;
  height: 30px;
`;

export const Buttons = styled.button`
  background-color: transparent;
  color: ${({ theme }) => theme.colors["high-emphasis"]};
  display: flex;
  border: none;
  align-items: center;
  justify-content: center;
  width: 30px;
  height: 30px;
  font-size: 2em;
  font-weight: 600;
  cursor: pointer;
  &:hover {
    background-color: ${({ theme }) => theme.colors.primary};
    color: ${({ theme }) => theme.colors["bright"]};
    font-size: 2.5em;
  }
`;

export const Input = styled.input`
  color: ${({ theme }) => theme.colors["high-emphasis"]};
  font-size: ${({ theme }) => theme.fontSize["label-large"]};
  font-weight: ${({ theme }) => theme.fontSize["label-large"]};
  border: none;
  outline: none;
  background-color: transparent;
  width: 19px;
  text-align: center;
`;
