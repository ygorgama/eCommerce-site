import { Raiting, } from "./index";
import { Meta, StoryObj } from "@storybook/react";
import { ThemeProvider } from "styled-components";
import defaultTheme from "../../styles/themes/default-theme";
import GlobalStyle from "../../styles/global-styles";


export default {
  title: "Components/Raiting",
  component: Raiting,
  args: {

  },
//   decorators: [
//     // (Story) => (
//     //   <ThemeProvider theme={defaultTheme}>
//     //     <Story />
//     //     <GlobalStyle />
//     //   </ThemeProvider>
//     // ),
//   ],
} ;

export const Default: StoryObj = {};

