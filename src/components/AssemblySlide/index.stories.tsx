import { AssemblyBanners, AssemblyBannersProps } from "./index";
import { Meta, StoryObj } from "@storybook/react";
import funk from "../../../src/assets/funk.png";
import spring from "../../../src/assets/spring.png";
import makeup from "../../../src/assets/makeup.png";
import personalcare from "../../../src/assets/personalcare.png";
import handbags from "../../../src/assets/handbags.png";
import skincare from "../../../src/assets/skincare.png";
import sunglasses from "../../../src/assets/sunglasses.png";
import facepacks from "../../../src/assets/facepacks.png";
import whatch from "../../../src/assets/wrist-watches.png";

export default {
  title: "Components/AssemblyBanners",
  component: AssemblyBanners,
  args: {
    firstImage: funk,
    secondImage: spring,
    thirdImage: makeup,
    firstImageAl: "Funk",
    secondImageAlt: "Spring",
    thirdImageAlt: "Makeup",
  },
} as Meta<AssemblyBannersProps>;

export const Default: StoryObj = {};
