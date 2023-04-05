import { HorizontalMenu,HorizontalMenuProps } from "./index";
import { Meta, StoryObj } from "@storybook/react";
import { withRouter } from "storybook-addon-react-router-v6";
import { ThemeProvider } from "styled-components";
import defaultTheme from "../../styles/themes/default-theme";
import GlobalStyle from "../../styles/global-styles";

export default {
  title: "Components/HorizontalMenu",
  component: HorizontalMenu,
  args: {
    href: "/default",
    children: "Label",
  },
  parameters: {
    reactRouter: {
      routePath: "/",

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
} as Meta<HorizontalMenuProps>;

export const Default: StoryObj = {};
export const Activate: StoryObj = {
  args: {
    href: "/",
  },
};
