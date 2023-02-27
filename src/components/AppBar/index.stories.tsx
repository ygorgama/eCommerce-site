import { AppBar, AppBarProps } from "./index";
import { Meta, StoryObj } from "@storybook/react";
import { withRouter } from "storybook-addon-react-router-v6";
import location from "../../assets/chevron-bottom.svg";

export default {
  title: "Components/AppBar",
  component: AppBar,
  decorators: [withRouter],
  parameters: {
    reactRouter: {
      routePath: "/",
    },
  },
  args: {
    iconOne: location,
    iconTwo: location,
    iconTree: location,
    iconeFour: location,
  },
} as Meta<AppBarProps>;

export const Default: StoryObj = {};

export const WithInfo: StoryObj = {
  args: {
    pageInfo: "Page Info",
    pageTitle: "Page Title",
  },
};
