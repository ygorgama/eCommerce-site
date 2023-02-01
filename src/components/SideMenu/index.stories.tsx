import { SideMenu, SideMenuProps } from "./index";
import { Meta, StoryObj } from "@storybook/react";
import { withRouter } from "storybook-addon-react-router-v6";

export default {
  title: "Components/SideMenu",
  component: SideMenu,
  decorators: [withRouter],
  parameters: {
    reactRouter: {
      routePath: "/",
    },
  },
  args: {
    to: "/label",
    label: "Label",
  },
} as Meta<SideMenuProps>;

export const Default: StoryObj = {};
export const Activate: StoryObj = {
  args: {
    to: "/",
  },
};
