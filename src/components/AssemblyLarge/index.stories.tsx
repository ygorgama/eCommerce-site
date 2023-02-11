import funk from "../../../src/assets/funk.png";
import facepacks from "../../../src/assets/facepacks.png";
import skincare from "../../../src/assets/skincare.png";
import { AssemblyLarge, AssemblyLargeProps } from "./index";
import { Meta, StoryObj } from "@storybook/react";

export default {
    title: "Components/AssemblyLarge",
    component: AssemblyLarge,
    args: {
        firstImage: funk,
        secondImage: facepacks,
        thirdImage: skincare,
        firstAlt: skincare,
        secondAlt: skincare,
        thirdAlt: skincare,
    },
  } as Meta<AssemblyLargeProps>;

export const Default: StoryObj = {};
