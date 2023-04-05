import { AssemblySquare, AssemblySquareProps } from "./index";
import { Meta, StoryObj } from "@storybook/react";
import watch from "../../assets/wrist-watches.png";
import { withRouter } from 'storybook-addon-react-router-v6';
import { ThemeProvider } from "styled-components";
import defaultTheme from "../../styles/themes/default-theme";
import GlobalStyle from "../../styles/global-styles";


export default {
  title: "Components/AssemblySquare",
  component: AssemblySquare,
  args:{
    imageOne: watch,
    imageTwo: watch,
    imageThree: watch,
    imageFour: watch,
  },
  parameters: {
    reactRouter: {
      routePath: '/users/:userId',
      routeParams: { userId: '42' },
    }
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
}as Meta<AssemblySquareProps> ;

export const Default: StoryObj = {};