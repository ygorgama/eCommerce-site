import { TabsMobile, TabsMobileProps } from "./";
import { Meta, StoryObj } from "@storybook/react";
import { withRouter } from "storybook-addon-react-router-v6";

export default {
  title: "Components/TabsMobile",
  component: TabsMobile,
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
} as Meta<TabsMobileProps>;

export const Default: StoryObj = {};
export const Activate: StoryObj = {
    args: {
        to: "/",
      },
};
