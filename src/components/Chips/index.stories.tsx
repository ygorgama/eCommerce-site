import { Chips, ChipsProps } from "./index";
import { Meta, StoryObj } from "@storybook/react";
import { ThemeProvider } from "styled-components";
import defaultTheme from "../../styles/themes/default-theme";
import GlobalStyle from "../../styles/global-styles";

export default {
  title: "Components/Chips",
  component: Chips,
  args: {
    children: "Label",
    type: "button",
    isDisabled: false,
  },
  decorators: [
    (Story) => (
      <ThemeProvider theme={defaultTheme}>
        <Story />
        <GlobalStyle />
      </ThemeProvider>
    ),
  ],
} as Meta<ChipsProps>;

export const Default: StoryObj = {};
