import { ReactNode } from "react";
import { Container } from "./styles";

export interface ChipsProps{
    type: 'submit' | 'reset' | 'button'
    isDisabled?: boolean
    children: ReactNode
}

export const Chips = ({type = 'button', children, isDisabled}:ChipsProps) => {
return(
    <Container type={type} disabled={isDisabled}>
        {children}
    </Container>
)
}