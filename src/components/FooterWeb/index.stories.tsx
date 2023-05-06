import { FooterWeb } from "./index";
import { Meta, StoryObj } from "@storybook/react";
import { ThemeProvider } from "styled-components";
import defaultTheme from "../../styles/themes/default-theme";
import GlobalStyle from "../../styles/global-styles";
import { withRouter } from "storybook-addon-react-router-v6";

export default {
  title: "Components/FooterWeb",
  component: FooterWeb,

  decorators: [
    withRouter,
    (Story: any) => (
      <ThemeProvider theme={defaultTheme}>
        <Story />
        <GlobalStyle />
      </ThemeProvider>
    ),
  ],
} ;

export const Default: StoryObj = {};
