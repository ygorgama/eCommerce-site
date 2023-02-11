import styled from "styled-components";

export const ContainerAssemblyLarge = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
`;

export const Container = styled.div`
  text-align: center;
`;

export const LargeCard = styled.span`
  grid-column: span 2;
  margin-bottom: 0.8em;
`;

export const SmallCard = styled.span`
  :not(:last-child) {
    margin-right: 0.7em;
  }
`;
