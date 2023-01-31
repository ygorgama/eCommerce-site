import { SideMenu } from "./index";
import { Meta, StoryObj } from "@storybook/react";

export default {
  title: "Components/SideMenu",
  component: SideMenu,
  args: {
    name: "Label",
    isDisable: false,
  },
} as Meta;

export const Default: StoryObj = {};

