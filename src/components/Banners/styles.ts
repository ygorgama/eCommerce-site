import styled from "styled-components";

interface BannerProps {
  size: "lg" | "sm" | "square";
}

export const GeneralBannersStyle = styled.img<BannerProps>`
  width: ${(props) => (props.size === "lg" ? "328px" : "156px")};
  height: ${props => props.size === 'lg' ? '120px' : props.size === 'sm' ? '100px' : '150px'};
`;
