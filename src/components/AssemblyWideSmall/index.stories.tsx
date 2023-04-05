import { AssemblyWideSmall } from "./index";
import { StoryObj } from "@storybook/react";
import { withRouter } from 'storybook-addon-react-router-v6';
import { ThemeProvider } from "styled-components";
import defaultTheme from "../../styles/themes/default-theme";
import GlobalStyle from "../../styles/global-styles";


export default {
  title: "Components/AssemblyWideSmall",
  component: AssemblyWideSmall,

  parameters: {
    reactRouter: {
      routePath: '/users/:userId',
      routeParams: { userId: '42' },
    }
  },
  decorators: [
    withRouter,

  ],
} ;

export const Default: StoryObj = {};