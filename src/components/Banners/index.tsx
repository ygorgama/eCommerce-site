import { GeneralBannersStyle } from "./styles";

export interface BannerProps {
  size: "lg" | "sm" | "square";
  src: string;
  alt?:string;
}

export const Banners = ({ size = "lg", src, alt}: BannerProps) => {
    return(
        <GeneralBannersStyle size={size} alt={alt} src={src}/>
    )
};
