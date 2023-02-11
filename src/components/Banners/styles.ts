import styled from "styled-components";

interface BannerProps {
  size: "lg" | "sm" | "square";
}

export const GeneralBannersStyle = styled.img<BannerProps>`
  width: ${(props) => (props.size === "lg" ? "328px" : "156px")};
  height: ${(props) =>
    props.size === "lg" ? "120px" : props.size === "sm" ? "100px" : "150px"};
  border-radius: 4px;
  @media (max-width: 325px) {
    width: ${(props) => (props.size === "lg" ? "290px" : props.size === 'sm' && '138px')};
  }
  @media (min-width: 425px) {
    width: ${(props) => (props.size === "lg" ? "100%" : props.size === 'sm' && '99%')};
    height: ${(props) => (props.size === "lg" ? "156px" : props.size === 'sm' && '200px')};
  }
`;
