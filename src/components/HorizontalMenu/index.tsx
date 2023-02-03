import { ReactNode } from "react";
import { HorizontalMenuContainer } from "./styles";

export interface HorizontalMenuProps {
  child: ReactNode;
  to: string;
}

export const HorizontalMenu = ({ to, child }: HorizontalMenuProps) => {
  return <HorizontalMenuContainer to={to}>{child}</HorizontalMenuContainer>;
};
