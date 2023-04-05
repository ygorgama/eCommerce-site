import { Box, Container } from "./styles";

export interface RadioProps {
    name: string;
    label?: string;
    isDisabled?: boolean;
  }
  

export const Radio = ({label, isDisabled = false, name}:RadioProps) => {
    return(
        <Box aria-disabled={isDisabled}>
            <Container name={name} disabled={isDisabled}/>
            {label  && <label about={name}>{label}</label>}
        </Box>
    )
}