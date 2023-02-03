import { BreadcrumbsMobile, BreadcrumbsMobileProps } from ".";
import { Meta, StoryObj } from "@storybook/react";
import { withRouter } from "storybook-addon-react-router-v6";

export default {
  title: "Components/BreadcrumbMobile",
  component: BreadcrumbsMobile,
  decorators: [withRouter],
  parameters: {
    reactRouter: {
      routePath: "/",
    },
  },
  args: {
    fifthChild: "Label",
    firstChild: "Label",
    secondChild: "Label",
    thirdChild: "Label",
    fourthChild: "Label",
    toFirst: "/",
    toSecond: "/label",
    toThird: "/label",
    toFourth: "/label",
    toFifth: "/label",
  },
} as Meta<BreadcrumbsMobileProps>;

export const Default: StoryObj = {};
export const Second: StoryObj = {
    args: {
        toFirst: "/label",
        toSecond: "/",
      },
};

export const Third: StoryObj = {
    args: {
        toFirst: "/label",
        toThird: "/",
      },
};

export const Fourth: StoryObj = {
    args: {
        toFirst: "/label",
        toFourth: "/",
      },
};

export const Fifth: StoryObj = {
    args: {
        toFirst: "/label",
        toFifth: "/",
      },
};
