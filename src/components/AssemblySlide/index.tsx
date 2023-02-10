import { Banners } from "../Banners";
import { BannerSpace, ContainerAssemblySlide } from "./styles";

export interface AssemblyBannersProps {
  firstImage: string;
  firstImageAlt: string;
  secondImage: string;
  secondImageAlt: string;
  thirdImage: string;
  thirdImageAlt: string;
}

export const AssemblyBanners = ({
  firstImage,
  secondImage,
  thirdImage,
  firstImageAlt,
  secondImageAlt,
  thirdImageAlt,
}: AssemblyBannersProps) => {
  return (
    <ContainerAssemblySlide>
      <BannerSpace>
        <Banners size="lg" src={firstImage} alt={firstImageAlt} />
      </BannerSpace>
      <BannerSpace>
        <Banners size="lg" src={secondImage} alt={secondImageAlt} />
      </BannerSpace>
      <BannerSpace>
        <Banners size="lg" src={thirdImage} alt={thirdImageAlt} />
      </BannerSpace>
    </ContainerAssemblySlide>
  );
};
