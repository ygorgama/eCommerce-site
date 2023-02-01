import { ContainerLinks, Divider, SideMenuIcon } from "./styles";
import icon from "../../assets/chevron-bottom.svg";

export interface SideMenuProps {
  label: string;
  to: string;
}

export const SideMenu = ({ to, label }: SideMenuProps) => {
  return (
    <div>
      <ContainerLinks to={to}>
        <span>{label}</span>
        <SideMenuIcon src={icon} />
      </ContainerLinks>
      <Divider/>
    </div>
  );
};
