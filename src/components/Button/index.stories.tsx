import { Button, ButtonProps } from "./index";
import { Meta, StoryObj } from "@storybook/react";
import { ThemeProvider } from "styled-components";
import defaultTheme from "../../styles/themes/default-theme";
import GlobalStyle from "../../styles/global-styles";

export default {
  title: "Components/Button",
  component: Button,
  args: {
    children: "Label",
    color: "primary",
    size: "lg",
    type: "button",
  },
  decorators: [
    (Story) => (
      <ThemeProvider theme={defaultTheme}>
        <Story />
        <GlobalStyle />
      </ThemeProvider>
    ),
  ],
} as Meta<ButtonProps>;

export const Default: StoryObj = {};

export const DefaultSmall: StoryObj = {
  args: {
    size: "sm",
  },
};

export const Secondary: StoryObj = {
  args: {
    color: "secondary",
  },
};

export const SecondarySmall: StoryObj = {
  args: {
    size: "sm",
    color: "secondary",
  },
};

export const Outline: StoryObj = {
  args: {
    color: "outline",
  },
};

export const OutlineSmall: StoryObj = {
  args: {
    size: "sm",
    color: "outline",
  },
};
