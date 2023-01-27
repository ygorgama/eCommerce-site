import { AccordianStyle, IconInverted, Label } from "./styles";
import arrow from "../../../src/assets/chevron-bottom.svg";

export interface AccordianProps {
  label: string;
  isActivate: boolean;
}

export const Accordian = ({ isActivate, label }: AccordianProps) => {
  return (
    <AccordianStyle>
      <Label>{label}</Label>
      {isActivate ? <IconInverted src={arrow} /> : <img src={arrow} />}
    </AccordianStyle>
  );
};
