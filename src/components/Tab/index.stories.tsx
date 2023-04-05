import { Tabs, TabsProps } from "./index";
import { Meta, StoryObj } from "@storybook/react";
import { withRouter } from "storybook-addon-react-router-v6";
import { ThemeProvider } from "styled-components";
import defaultTheme from "../../styles/themes/default-theme";
import GlobalStyle from "../../styles/global-styles";

export default {
  title: "Components/Tabs",
  component: Tabs,
  args: {
    fifthChildren: "Label",
    firstChildren: "Label",
    sencondChildren: "Label",
    thirdChildren: "Label",
    fourthChildren: "Label",
    fifthHref: "/",
    firstHref: "/home",
    secondHref: "/",
    thirdHref: "/",
    fourthHref: "/",
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
} as Meta<TabsProps>;

export const Default: StoryObj = {};
