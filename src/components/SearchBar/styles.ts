import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  align-items: flex-end;
`;

export const Box = styled.div`
  display: flex;
  align-items: center;
  width: 300px;
  height: 40px;
  background-color: ${({ theme }) => theme.colors.grey};
  border-radius: 8px;
`;

export const Input = styled.input`
  background-color: transparent;
  border: none;
  outline: none;
  font-size: ${({ theme }) => theme.fontSize["body-medium"]};
  font-weight: ${({ theme }) => theme.fontWeight["body-medium"]};
  color: ${({ theme }) => theme.colors["low-emphasis"]};
  margin-left: .8em;
  &::placeholder {
    font-size: ${({ theme }) => theme.fontSize["body-medium"]};
    font-weight: ${({ theme }) => theme.fontWeight["body-medium"]};
    color: ${({ theme }) => theme.colors["low-emphasis"]};
  }
`;

export const Icon = styled.img`
  width: 24px;
  height: 24px;
  margin-right: .6em;
`