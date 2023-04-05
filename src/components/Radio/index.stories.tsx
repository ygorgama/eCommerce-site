import { Radio, RadioProps } from "./index";
import { Meta, StoryObj } from "@storybook/react";
import { ThemeProvider } from "styled-components";
import defaultTheme from "../../styles/themes/default-theme";
import GlobalStyle from "../../styles/global-styles";


export default {
  title: "Components/Radio",
  component: Radio,
  args: {
    name: "label",
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
} as Meta<RadioProps>;

export const Default: StoryObj = {};

export const Label: StoryObj = {
  args: {
    label: "Label",
  },
};
