import React from "react";
import { Container } from "./styles";

export interface BottonNavegationLinkProps{
    to: string;
    theme: 'primary' | 'bright';
    iconBright: string;
    iconPrimary: string;
    iconBlur: string;
    label: string
}


export const BottonNavegationLink = ({theme, to, iconBright, label, iconPrimary, iconBlur}:BottonNavegationLinkProps) => {
    return(
        <Container to={to} theme={theme} >
            {
                ({isActive}) => isActive ? ( <React.Fragment>
                    <img src={theme === 'bright' ? iconBright : iconPrimary} alt={theme === 'bright' ? iconBright : iconPrimary} /> <span>{label}</span>
                </React.Fragment>) : <img src={iconBlur} alt={iconBlur} />
            }
        </Container>
    )
}