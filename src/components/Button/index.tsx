import { ReactNode } from "react";
import { Container } from "./styles";

export interface ButtonProps{
    size: "full" | "lg" | "sm";
    color: "primary" | "secondary" | "outline";
    type: 'submit' | 'reset' | 'button'
    isDisabled?: boolean
    children: ReactNode
}

export const Button = ({children, color, size, type, isDisabled = false}:ButtonProps) => {
    return (
        <Container disabled={isDisabled} color={color} size={size} type={type}>
            {children}
        </Container>
    )
}