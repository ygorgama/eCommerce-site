import { CheckboxStyle, LabelStyle } from "./styles";

export interface CheckboxProps {
  name: string;
  isDisable?: boolean;
  label?: string;
}

export const Checkbox = ({ name, isDisable=false, label }: CheckboxProps) => {
  return (
    <LabelStyle isDisable={isDisable}>
      <CheckboxStyle disabled={isDisable} label={label} name={name} />
      {label}
    </LabelStyle>
  );
};
