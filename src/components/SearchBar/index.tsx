import { Box, Container, Icon, Input } from "./styles"
import icon from '../../assets/chevron-left.svg'

export interface SearchBarProps {
    iconOne: string;
    iconTwo: string;
}

export const SearchBar = ({iconOne, iconTwo}:SearchBarProps) => {
    return(
        <Container>
            <Icon src={icon} alt="Icone seta"/>
            <Box >
                <Input placeholder="Search" type="search"/>
                <Icon src={iconOne} />
                <Icon src={iconTwo} />
            </Box>
        </Container>
    )
}