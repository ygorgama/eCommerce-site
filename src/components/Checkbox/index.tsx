import { Box, Container } from "./styles"

export interface CheckboxProps{
    label?: string
}

export const Checkbox = ({label}:CheckboxProps) => {
    return(
        <Box>
            <Container label={label}/>
            {label && <label>{label}</label>}
        </Box>
    )
}