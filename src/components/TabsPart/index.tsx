import { Container } from "./styles";

export interface TabPartProps{
    children: string;
    href: string;
}

export const TabPart = ({children, href}:TabPartProps) => {
    return(
        <Container to={href}>
            {children}
        </Container>
    )
}