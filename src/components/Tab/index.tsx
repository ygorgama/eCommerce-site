import { TabPart } from "../TabsPart";
import { Container } from "./styles";

export interface TabsProps {
  firstHref: string;
  secondHref: string;
  thirdHref: string;
  fourthHref: string;
  fifthHref: string;
  firstChildren: string;
  fifthChildren: string;
  sencondChildren: string;
  thirdChildren: string;
  fourthChildren: string;
}

export const Tabs = (props: TabsProps) => {
  return (
    <Container>
      <TabPart children={props.firstChildren} href={props.firstHref} />
      <TabPart children={props.sencondChildren} href={props.secondHref} />
      <TabPart children={props.thirdChildren} href={props.thirdHref} />
      <TabPart children={props.fourthChildren} href={props.fourthChildren} />
      <TabPart children={props.fifthChildren} href={props.fifthHref} />
    </Container>
  );
};
