import { Container, ContainerSearchBar, Icon, InputSeachBar } from "./styles"
import arrow from '../../assets/chevron-bottom.svg'
import { ReactNode } from "react"

export interface SearchBarProps {
    children?: ReactNode
}

export const SearchBar = ({children}:SearchBarProps) => {
    return(
        <Container>
            <Icon src={arrow}/>
            <ContainerSearchBar>
                <InputSeachBar placeholder="Search"/>
                {children}
            </ContainerSearchBar>
        </Container>
    )
}