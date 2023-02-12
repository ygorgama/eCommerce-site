import { HeaderWeb } from "./";
import { Meta, StoryObj } from "@storybook/react";
import { withRouter } from "storybook-addon-react-router-v6";

export default {
  title: "Components/HeaderWeb",
  component: HeaderWeb,
  decorators: [withRouter],
  parameters: {
    reactRouter: {
      routePath: "/",
    },
  },
} as Meta;

export const Default: StoryObj = {};
