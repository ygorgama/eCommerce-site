import { CheckboxStyle, LabelStyle } from "./styles";

export interface CheckboxProps {
  name: string;
  label?: string;
}

export const Checkbox = ({ name, label }: CheckboxProps) => {
  return (
    <LabelStyle>
      <CheckboxStyle label={label} name={name} />
      {label}
    </LabelStyle>
  );
};
