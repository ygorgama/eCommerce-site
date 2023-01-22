import React, { ReactNode } from "react";
import { ButtonStyle } from "./styles";

export interface ButtonProps {
  children: ReactNode;
  type: "submit" | "button" | "reset";
  color: "primary" | "secondary" | "outline";
  size: "full" | "lg" | "sm" | "chip";
  isDisabled?: boolean;
}

export const Button = ({
  children,
  color,
  size,
  type,
  isDisabled = false,
}: ButtonProps) => {
  return (
    <ButtonStyle disabled={isDisabled} type={type} color={color} size={size}>
      {children}
    </ButtonStyle>
  );
};
