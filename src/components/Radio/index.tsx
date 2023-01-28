import { LabelStyle } from "../Checkboxes/styles";
import { RadioStyle } from "./styles";

export interface RadioProps {
  name: string;
  isDisable?: boolean;
  label?: string;
}

export const Radio = ({ name, isDisable = false, label }: RadioProps) => {
  return (
    <LabelStyle isDisable={isDisable}>
      <RadioStyle disabled={isDisable} name={name} />
      {label}
    </LabelStyle>
  );
};
