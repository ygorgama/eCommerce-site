import { FooterMobile } from "./index";
import { Meta, StoryObj } from "@storybook/react";
import { withRouter } from "storybook-addon-react-router-v6";

export default {
  title: "Components/FooterMobile",
  component: FooterMobile,
  decorators: [withRouter],
  parameters: {
    reactRouter: {
      routePath: "/",
    },
  },
  args: {},
} as Meta;

export const Default: StoryObj = {};


