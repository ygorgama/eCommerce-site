import { FormControl, FormControlProps } from "./index";
import { Meta, StoryObj } from "@storybook/react";

export default {
  title: "Components/FormControl",
  component: FormControl,
  args: {
    placeholder: 'Label',
    label: 'Label',
    errorMessage: 'Error Message'
  },
} as Meta<FormControlProps>;

export const Default: StoryObj = {};
export const Error: StoryObj = {
    args:{
        isError: true
    }
};

export const Disabled: StoryObj = {
    args:{
        isDisabled: true
    }
};


