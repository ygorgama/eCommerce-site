import { Container, IconBreadcrumbs, LinkBreadcrumbs } from "./styles";
import icon from "../../assets/chevron-right-default.svg";

export interface BreadcrumbsProps {
  firstChild: string;
  secondChild: string;
  firstHref: string;
  secondHref: string;
  thirdHref?: string;
  thirdChild?: string;
}

export const Breadcrumbs = (props: BreadcrumbsProps) => {
  return (
    <Container>
      <LinkBreadcrumbs to={props.firstHref}>{props.firstChild}</LinkBreadcrumbs>
      <IconBreadcrumbs src={icon} alt="Icon" />
      <LinkBreadcrumbs to={props.secondHref}>
        {props.secondChild}
      </LinkBreadcrumbs>
      {props.thirdChild && props.thirdHref && (
        <>
          <IconBreadcrumbs src={icon} alt="Icon" />
          <LinkBreadcrumbs to={props.thirdHref}>
            {props.thirdChild}
          </LinkBreadcrumbs>
        </>
      )}
    </Container>
  );
};
