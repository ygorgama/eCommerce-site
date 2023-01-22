import { Button, ButtonProps } from "./index";
import { Meta, StoryObj } from "@storybook/react";

export default {
  title: "Components/Button",
  component: Button,
  args: {
    children: "Label",
    color: "primary",
    size: "lg",
    type: "submit",
    isDisabled: false,
  },
} as Meta<ButtonProps>;

export const Default: StoryObj = {};

export const Small: StoryObj = {
  args: {
    size: "sm",
  },
};
export const Chips: StoryObj = {
  args: {
    size: "chip",
  },
};

export const Full: StoryObj = {
  args: {
    size: "full",
  },
};

export const Secondary: StoryObj = {
  args: {
    color: "secondary",
    size: "lg",
  },
};

export const Outline: StoryObj = {
  args: {
    color: "outline",
    size: "lg",
  },
};
