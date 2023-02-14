import { FooterWeb } from ".";
import { Meta, StoryObj } from "@storybook/react";
import { withRouter } from "storybook-addon-react-router-v6";

export default {
  title: "Components/FooterWeb",
  component: FooterWeb,
  decorators: [withRouter],
  parameters: {
    reactRouter: {
      routePath: "/",
    },
  },
} as Meta;

export const Defaut: StoryObj = {}