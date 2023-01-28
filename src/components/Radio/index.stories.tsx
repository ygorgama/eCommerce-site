import { Radio, RadioProps } from "./index";
import { Meta, StoryObj } from "@storybook/react";

export default {
  title: "Components/Radio",
  component: Radio,
  args: {
    name: "Label",
    isDisable: false,
  },
} as Meta<RadioProps>;

export const Default: StoryObj = {};

export const Label: StoryObj = {
  args: {
    label: "Label",
  },
};
