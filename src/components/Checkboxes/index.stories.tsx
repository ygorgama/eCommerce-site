import { Checkbox, CheckboxProps } from "./index";
import { Meta, StoryObj } from "@storybook/react";

export default {
  title: "Components/Checkbox",
  component: Checkbox,
  args: {
    name: "Label",
    isDisable: false,
  },
} as Meta<CheckboxProps>;

export const Default: StoryObj = {};

export const Label: StoryObj = {
  args: {
    label: "Label",
  },
};
