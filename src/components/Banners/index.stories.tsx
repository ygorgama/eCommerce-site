import { Banners, BannerProps } from "./index";
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
  title: "Components/Banners",
  component: Banners,
  args: {
    size: "lg",
    src: funk,
  },
} as Meta<BannerProps>;

export const Default: StoryObj = {};

export const Spring: StoryObj = {
  args: {
    src: spring,
  },
};

export const Makeup: StoryObj = {
  args: {
    src: makeup,
  },
};

export const Whatch: StoryObj = {
  args: {
    size: "square",
    src: whatch,
  },
};

export const Sunglasses: StoryObj = {
  args: {
    size: "square",
    src: sunglasses,
  },
};

export const PersonalCare: StoryObj = {
  args: {
    size: "square",
    src: personalcare,
  },
};

export const Handbags: StoryObj = {
  args: {
    size: "square",
    src: handbags,
  },
};

export const Facepacks: StoryObj = {
  args: {
    size: "sm",
    src: facepacks,
  },
};

export const Skincare: StoryObj = {
  args: {
    size: "sm",
    src: skincare,
  },
};
