import { Banners } from "../Banners";
import { ContainerSquare, ItemSquare } from "./styles";

export interface AssemblyBannersProps {
  firstImage: string;
  firstImageAlt: string;
  secondImage: string;
  secondImageAlt: string;
  thirdImage: string;
  thirdImageAlt: string;
  fourthImage: string;
  fourthImageAlt: string;
}

export const AssemblySquare = ({
  firstImage,
  firstImageAlt,
  fourthImage,
  fourthImageAlt,
  secondImage,
  secondImageAlt,
  thirdImage,
  thirdImageAlt,
}: AssemblyBannersProps) => {
  return (
    <ContainerSquare>
      <ItemSquare>
        <Banners size="square" src={firstImage} alt={firstImageAlt} />
      </ItemSquare>
      <ItemSquare>
        <Banners size="square" src={secondImage} alt={secondImageAlt} />
      </ItemSquare>
      <ItemSquare>
        <Banners size="square" src={thirdImage} alt={thirdImageAlt} />
      </ItemSquare>
      <ItemSquare>
        <Banners size="square" src={fourthImage} alt={fourthImageAlt} />
      </ItemSquare>
    </ContainerSquare>
  );
};
