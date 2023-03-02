import { BottonNavegationLink, BottonNavegationLinkProps } from "./index";

import { Meta, StoryObj } from "@storybook/react";
import { withRouter } from "storybook-addon-react-router-v6";
import location from "../../assets/location.svg";
import bag from '../../assets/home.svg'
import homeBlur from '../../assets/home-blur.svg'

export default {
  title: "Components/BottonNavegationLink",
  component: BottonNavegationLink,
  decorators: [withRouter],
  parameters: {
    reactRouter: {
      routePath: "/",
    },
  },
  args: {
    iconPrimary: location,
    iconBright: bag,
    iconBlur: homeBlur,
    label: "Home",
    theme: "primary",
    to: "/home",
  },
} as Meta<BottonNavegationLinkProps>;

export const Default: StoryObj = {};

export const Home: StoryObj = {
  args: {
    to: "/",
  },
};

export const DefaultBright: StoryObj = {
  args: {
    theme: "bright",
  },
};

