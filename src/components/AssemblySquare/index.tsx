import { Banners } from "../Banners"
import { Container, Itens } from "./styles"

export interface AssemblySquareProps{
    imageOne: string;
    imageTwo: string;
    imageThree: string;
    imageFour: string;
}

export const AssemblySquare = ({imageFour, imageOne, imageThree, imageTwo}:AssemblySquareProps) => {
    return(
        <Container>
            <Itens to={'/404'}>
                <Banners size="square" src={imageOne}/>
            </Itens>
            <Itens to={'/404'}>
                <Banners size="square" src={imageTwo}/>
            </Itens>
            <Itens to={'/404'}>
                <Banners size="square" src={imageThree}/>
            </Itens>
            <Itens to={'/404'}>
                <Banners size="square" src={imageFour}/>
            </Itens>
        </Container>
    )
}