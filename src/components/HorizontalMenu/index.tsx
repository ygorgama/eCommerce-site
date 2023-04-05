import { ReactNode } from "react";
import { Container } from "./styles";

export interface HorizontalMenuProps {
    children: ReactNode;
    href: string;
}

export const HorizontalMenu = ({children, href}:HorizontalMenuProps) => {
    return(
        <Container to={href}>
            {children}
        </Container>
    )
}