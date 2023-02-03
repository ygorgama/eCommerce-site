import { ReactNode } from "react";
import { ContainerTabs } from "./styles";

export interface TabsMobileProps {
  child: ReactNode;
  to: string;
}

export const TabsMobile = ({ child, to }: TabsMobileProps) => {
  return <ContainerTabs to={to}>{child}</ContainerTabs>;
};
