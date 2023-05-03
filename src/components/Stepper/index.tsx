import { useState } from "react"
import { Buttons, Container, Input } from "./styles"

export const Stepper = () => {
    const [value, setvalue] = useState<number>(1)
    return(
        <Container>
            <Buttons onClick={() => value > 1 ? setvalue(value - 1) : value}>
                -
            </Buttons>
            <Input  value={value}/>
            <Buttons onClick={() => setvalue(value + 1)}>
                +
            </Buttons>
        </Container>
    )
}