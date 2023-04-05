import { Container, Icon, IconInverted } from "./styles";
import icon from '../../assets/chevron-bottom.svg'

export interface AccordianProps {
  isActivate: boolean;
}

export const Accordian = ({isActivate = false}:AccordianProps) => {
  return (
    <Container>
      <span>Product Details</span>
      {
        isActivate ? <IconInverted src={icon} alt="Icon activate"/> : <Icon src={icon} alt="Icon deactivated"/>
      }
    </Container>
  );
};
