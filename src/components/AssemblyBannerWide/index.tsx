import { Banners } from "../Banners";
import { Container, Itens } from "./styles";

export interface AssemblyBannersWideProps{
    imageOne: string;
    imageTwo: string;
    imageThree: string;
    linkOne: string;
    linkTwo: string;
    linkThree: string;
    altOne?: string;
    altTwo?: string;
    altTree?: string;
}

export const AssemblyBannersWide = ({imageOne, imageTwo, imageThree, linkOne,linkTwo ,linkThree, altOne, altTree, altTwo}:AssemblyBannersWideProps) => {
  return (
    <Container>
        <Itens to={linkOne}>
            <Banners size="wide" src={imageOne} alt={altOne} />
        </Itens>
        <Itens to={linkTwo}>
            <Banners size="wide" src={imageTwo} alt={altTwo} />
        </Itens>
        <Itens to={linkThree}>
            <Banners size="wide" src={imageThree} alt={altTree} />
        </Itens>

    </Container>
  );
};
