import { Icon } from "../Accordian/styles";
import { Container, Separator } from "./styles";
import iconDefault from "../../assets/chevron-right-default.svg";
import iconActivate from "../../assets/chevron-right.svg";

export interface SideNavegationMenuProps {
  children: string;
  href: string;
}

export const SideNavegationMenu = ({
  children,
  href,
}: SideNavegationMenuProps) => {
  return (
    <div>
      <Container to={href}>
        {({ isActive }) =>
          isActive ? (
            <>
              <span>{children}</span>
              <Icon src={iconActivate} alt="Ativo" />
            </>
          ) : (
            <>
              <span>{children}</span>
              <Icon src={iconDefault} alt="Default" />
            </>
          )
        }
      </Container>
      <Separator />
    </div>
  );
};
