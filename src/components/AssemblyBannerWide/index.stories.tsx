import { AssemblyBannersWide, AssemblyBannersWideProps } from "./index";
import { Meta, StoryObj } from "@storybook/react";
import funk from "../../assets/funk.png";
import { withRouter } from 'storybook-addon-react-router-v6';
import { ThemeProvider } from "styled-components";
import defaultTheme from "../../styles/themes/default-theme";
import GlobalStyle from "../../styles/global-styles";


export default {
  title: "Components/AssemblyBannersWide",
  component: AssemblyBannersWide,
  args:{
    imageOne: funk,
    imageTwo: funk,
    imageThree: funk,
    linkOne: '/',
    linkTwo: '/',
    linkThree: '/'
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
}as Meta<AssemblyBannersWideProps> ;

export const Default: StoryObj = {};