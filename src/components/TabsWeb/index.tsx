import { TabWebStyle } from "./styles";

export interface TabWebProps {
  child: string;
  to: string;
}

export const TabWeb = ({ child, to }: TabWebProps) => {
  return <TabWebStyle to={to}>{child}</TabWebStyle>;
};
