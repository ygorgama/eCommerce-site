import { BottomNavegationProps, BottonNavegation } from "./index";
import { Meta, StoryObj } from "@storybook/react";
import { withRouter } from "storybook-addon-react-router-v6";

export default {
  title: "Components/BottonNavegation",
  component: BottonNavegation,
  decorators: [withRouter],
  parameters: {
    reactRouter: {
      routePath: "/home",
    },
  },
  args: {
    theme: "primary",
  },
} as Meta<BottomNavegationProps>;

export const Default: StoryObj = {};

export const Categories: StoryObj = {
  parameters: {
    reactRouter: {
      routePath: "/categories",
    },
  },
};
export const Profile: StoryObj = {
  parameters: {
    reactRouter: {
      routePath: "/profile",
    },
  },
};
export const Bag: StoryObj = {
  parameters: {
    reactRouter: {
      routePath: "/bag",
    },
  },
};
