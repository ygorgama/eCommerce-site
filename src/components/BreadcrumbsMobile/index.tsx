import { TabsMobile } from "../TabsMobile";
import { ContainerBreadcumbs } from "./styles";

export interface BreadcrumbsMobileProps{
    firstChild: string;
    secondChild: string;
    thirdChild: string;
    fourthChild: string;
    fifthChild: string;
    toFirst: string
    toSecond: string
    toThird: string
    toFourth: string
    toFifth: string
}
export const BreadcrumbsMobile = ({firstChild, secondChild, thirdChild, fourthChild, fifthChild, toFirst, toSecond, toThird, toFourth, toFifth}: BreadcrumbsMobileProps) => {
    return <ContainerBreadcumbs>
        <TabsMobile to={toFirst} child={firstChild}></TabsMobile>
        <TabsMobile to={toSecond}  child={secondChild}></TabsMobile>
        <TabsMobile to={toThird} child={thirdChild}></TabsMobile>
        <TabsMobile to={toFourth} child={fourthChild}></TabsMobile>
        <TabsMobile to={toFifth} child={fifthChild}></TabsMobile>
    </ContainerBreadcumbs>
}