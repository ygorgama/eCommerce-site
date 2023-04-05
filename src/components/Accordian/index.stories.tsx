import { Accordian, AccordianProps } from "./index";
import { StoryObj, Meta } from "@storybook/react";
import { ThemeProvider } from "styled-components";
import defaultTheme from "../../styles/themes/default-theme";
import GlobalStyle from "../../styles/global-styles";


export default {
    title: "Components/Accordian",
    component: Accordian,
    args: {
        isActivate: false,
    },
    decorators: [
      (Story) => (
        <ThemeProvider theme={defaultTheme}>
          <Story />
          <GlobalStyle />
        </ThemeProvider>
      ),
    ],
  } as Meta<AccordianProps>;
  
  export const Default: StoryObj = {};

  export const Activate: StoryObj = {
    args: {
        isActivate: true,
    },
  };