import React, { ReactNode, useState } from "react";
import {
  ContainerFormControl,
  ErrorMessageShow,
  InputFormControl,
  LabelContainer,
} from "./styles";

export interface FormControlProps {
  placeholder: string;
  label: string;
  size: "full" | "lg" | "sm";
  firstChild?: ReactNode;
  secondChild?: ReactNode;
  isError?: boolean;
  errorMessage?: string
  isDisabled?: boolean
}

export const FormControl = ({
  firstChild,
  secondChild,
  placeholder,
  isError = false,
  errorMessage,
  size,
  label,
  isDisabled = false
}: FormControlProps) => {
  const [isLabelAppear, setIsLabelAppear] = useState<boolean>(false);

  const onInputFocus = () => {
    setIsLabelAppear(true);
  };

  const onInputUnfocus = () => {
    setIsLabelAppear(false);
  };

  return (
    <React.Fragment>
      <ContainerFormControl isDisabled={isDisabled} size={size} isError={isError}>
        {firstChild}
        <LabelContainer>
          {isLabelAppear && label}
          <InputFormControl disabled={isDisabled}
            placeholder={placeholder}
            onFocus={onInputFocus}
            onBlur={onInputUnfocus}
          />
        </LabelContainer>
        {secondChild}
      </ContainerFormControl>
      {isError && <ErrorMessageShow>{errorMessage}</ErrorMessageShow>}
    </React.Fragment>
  );
};
