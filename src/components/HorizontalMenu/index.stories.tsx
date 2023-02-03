import { HorizontalMenu, HorizontalMenuProps } from "./";
import { Meta, StoryObj } from "@storybook/react";
import { withRouter } from "storybook-addon-react-router-v6";

export default {
  title: "Components/HorizontalMenu",
  component: HorizontalMenu,
  decorators: [withRouter],
  parameters: {
    reactRouter: {
      routePath: "/",
    },
  },
  args: {
    child: "Label",
    to: "/label",
  },
} as Meta<HorizontalMenuProps>;

export const Default: StoryObj = {};
export const Activate: StoryObj = {
    args: {
        to: "/",
      },
};
