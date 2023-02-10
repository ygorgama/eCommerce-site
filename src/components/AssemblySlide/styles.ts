import styled from "styled-components";

export const ContainerAssemblySlide = styled.div`
  margin-left: 0.6em;
  display: flex;
  align-items: center;
  overflow: scroll;
  ::-webkit-scrollbar {
    display: none;
  }
`;

export const BannerSpace = styled.span`
  :not(:last-child) {
    margin-right: 1.3em;
  }
`;
