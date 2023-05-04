import { SearchBar, SearchBarProps } from "./index";
import { Meta, StoryObj } from "@storybook/react";
import { ThemeProvider } from "styled-components";
import defaultTheme from "../../styles/themes/default-theme";
import GlobalStyle from "../../styles/global-styles";
import icon from '../../assets/placeholder.svg'

export default {
  title: "Components/SearchBar",
  component: SearchBar,
  args: {
    iconOne: icon,
    iconTwo: icon,
  },
  decorators: [
    (Story: any) => (
      <ThemeProvider theme={defaultTheme}>
        <Story />
        <GlobalStyle />
      </ThemeProvider>
    ),
  ],
} as Meta<SearchBarProps>;

export const Default: StoryObj = {};
