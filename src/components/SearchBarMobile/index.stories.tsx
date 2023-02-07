import { SearchBar } from "./index";
import { Meta, StoryObj } from "@storybook/react";
import { withRouter } from "storybook-addon-react-router-v6";

export default {
  title: "Components/SearchBar",
  component: SearchBar,
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
} as Meta;

export const Default: StoryObj = {};
