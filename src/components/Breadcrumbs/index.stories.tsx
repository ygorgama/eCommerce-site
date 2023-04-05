import { Breadcrumbs, BreadcrumbsProps } from "./index";
import { Meta, StoryObj } from "@storybook/react";
import { withRouter } from "storybook-addon-react-router-v6";
import { ThemeProvider } from "styled-components";
import defaultTheme from "../../styles/themes/default-theme";
import GlobalStyle from "../../styles/global-styles";

export default {
  title: "Components/Breadcrumbs",
  component: Breadcrumbs,
  args: {
    firstChild: "Label",
    secondChild: "Label",
    thirdChild: "Label",
    firstHref: "/",
    secondHref: "/",
    thirdHref: "/home",
  },
  parameters: {
    reactRouter: {
      routePath: "/home",

    },
  },
  decorators: [
    withRouter,
    (Story) => (
      <ThemeProvider theme={defaultTheme}>
        <Story />
        <GlobalStyle />
      </ThemeProvider>
    ),
  ],
} as Meta<BreadcrumbsProps>;

export const Default: StoryObj = {};
