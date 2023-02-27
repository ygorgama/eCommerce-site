import { NavLink } from "react-router-dom";
import { Container, ContainerFlex, Icons, PageInfo, PageTitle, Search } from "./styles";

export interface AppBarProps {
  iconOne: string;
  iconTwo: string;
  iconTree: string;
  iconeFour: string;
  pageInfo?: string;
  pageTitle?: string
}

export const AppBar = ({
  iconOne,
  iconTwo,
  iconTree,
  iconeFour,
  pageInfo,
  pageTitle
}: AppBarProps) => {
  return (
    <Container>
      <ContainerFlex>
        <Icons src={iconOne} />
        <div>{pageInfo === undefined && <Search>Search</Search>}
        {pageTitle && <PageTitle>{pageTitle}</PageTitle>}
        {pageInfo && <PageInfo>{pageInfo}</PageInfo>}

        </div>
      </ContainerFlex>
      <ContainerFlex>
        <Icons src={iconTwo} />
        <Icons src={iconTree} />
        <Icons src={iconeFour} />
      </ContainerFlex>
    </Container>
  );
};
