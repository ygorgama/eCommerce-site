import { Checkbox, CheckboxProps } from "./index";
import { Meta, StoryObj } from "@storybook/react";
import { ThemeProvider } from "styled-components";
import defaultTheme from "../../styles/themes/default-theme";
import GlobalStyle from "../../styles/global-styles";
import imageBannerWide from "../../assets/funk.png";
import imageBannerSquare from "../../assets/wrist-watches.png";
import imageBannerSmall from "../../assets/skincare.png";

export default {
  title: "Components/Checkbox",
  component: Checkbox,
  args: {
  },
  decorators: [
    (Story) => (
      <ThemeProvider theme={defaultTheme}>
        <Story />
        <GlobalStyle />
      </ThemeProvider>
    ),
  ],
} as Meta<CheckboxProps>;

export const Default: StoryObj = {};

export const Label: StoryObj = {
  args: {
    label: "Label",
  },
};
