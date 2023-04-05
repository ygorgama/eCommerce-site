import { Banners } from "../Banners"
import { Container, ItemOne, ItensSmalls } from "./styles"
import funk from '../../assets/funk.png'
import skincare from '../../assets/skincare.png'

export const AssemblyWideSmall = () => {
    return(
        <Container>
            <ItemOne to={'/404'}>
                <Banners src={funk} size="wide" alt="Funk Banner"></Banners>
            </ItemOne>
            <ItensSmalls to={'/404'}>
                <Banners src={skincare} size="sm" alt="skincare Banner"></Banners>
            </ItensSmalls>
            <ItensSmalls to={'/404'}>
                <Banners src={skincare} size="sm" alt="skincare Banner"></Banners>
            </ItensSmalls>
        </Container>
    )
}