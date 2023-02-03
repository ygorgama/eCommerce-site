import { TabWeb, TabWebProps } from "./";
import { Meta, StoryObj } from "@storybook/react";
import { withRouter } from "storybook-addon-react-router-v6";

export default {
  title: "Components/TabWeb",
  component: TabWeb,
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
} as Meta<TabWebProps>;

export const Default: StoryObj = {};
export const Activate: StoryObj = {
    args: {
        to: "/",
      },
};
