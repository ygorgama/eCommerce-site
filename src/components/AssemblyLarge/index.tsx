import { Banners } from "../Banners";
import {
  Container,
  ContainerAssemblyLarge,
  LargeCard,
  SmallCard,
} from "./styles";

export interface AssemblyLargeProps {
  firstImage: string;
  secondImage: string;
  thirdImage: string;
  firstAlt: string;
  secondAlt: string;
  thirdAlt: string;
}

export const AssemblyLarge = ({
  firstImage,
  secondImage,
  thirdImage,
  firstAlt,
  secondAlt,
  thirdAlt,
}: AssemblyLargeProps) => {
  return (
    <Container>
      <ContainerAssemblyLarge>
          <LargeCard>
            <Banners size="lg" alt={firstAlt} src={firstImage} />
          </LargeCard>
          <SmallCard>
            <Banners size="sm" alt={secondAlt} src={secondImage} />
          </SmallCard>
          <SmallCard>
            <Banners size="sm" alt={thirdAlt} src={thirdImage} />
          </SmallCard>
      </ContainerAssemblyLarge>
    </Container>
  );
};
