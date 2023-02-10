import personalcare from "../../../src/assets/personalcare.png";
import handbags from "../../../src/assets/handbags.png";
import sunglasses from "../../../src/assets/sunglasses.png";
import whatch from "../../../src/assets/wrist-watches.png";
import { AssemblySquare, AssemblyBannersProps } from ".";
import { Meta, StoryObj } from "@storybook/react";

export default {
  title: "Components/AssemblySquare",
  component: AssemblySquare,
  args: {
    firstImage: personalcare,
    secondImage: handbags,
    thirdImage: whatch,
    fourthImage: sunglasses,
    firstImageAl: "Personal Care",
    secondImageAlt: "Handbags",
    thirdImageAlt: "Whatch",
    fourthImageAlt: "Sunglasses"
  },
} as Meta<AssemblyBannersProps>;

export const Default: StoryObj = {};
