import { useState } from "react"
import { ButtonStepper, ContainerStepper, InputStepper } from "./styles"

export const Stepper = () => {
    const [stepperValue, setStepperValue] = useState<number>(0)

    const addValueHandler = () => {
        setStepperValue((prevState) => prevState + 1)
    }

    const decreaseValueHandler = () => {
        setStepperValue((prevState) => prevState > 0 ? prevState - 1 : prevState)
    }

    return(
        <ContainerStepper>
            <ButtonStepper onClick={decreaseValueHandler}>
                -
            </ButtonStepper>
            <InputStepper disabled  value={stepperValue}/>
            <ButtonStepper onClick={addValueHandler}>
                +
            </ButtonStepper>
        </ContainerStepper>
    )
}

