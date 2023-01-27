import { Accordian, AccordianProps } from "./index";
import { Meta, StoryObj } from "@storybook/react";

export default {
  title: "Components/Accordian",
  component: Accordian,
  args: {
    label: "Product Details",
    isActivate: false,
  },
} as Meta<AccordianProps>;

export const Default: StoryObj = {};

export const Activate: StoryObj = {
  args: {
    isActivate: true,

  },
};
