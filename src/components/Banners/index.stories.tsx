import { Banners, BannersProps } from "./index";
import { Meta, StoryObj } from "@storybook/react";
import { ThemeProvider } from "styled-components";
import defaultTheme from "../../styles/themes/default-theme";
import GlobalStyle from "../../styles/global-styles";
import imageBannerWide from "../../assets/funk.png";
import imageBannerSquare from "../../assets/wrist-watches.png";
import imageBannerSmall from "../../assets/skincare.png";

export default {
  title: "Components/Banners",
  component: Banners,
  args: {
    src: imageBannerWide,
    size: "wide",
    alt: imageBannerWide,
  },
  decorators: [
    (Story) => (
      <ThemeProvider theme={defaultTheme}>
        <Story />
        <GlobalStyle />
      </ThemeProvider>
    ),
  ],
} as Meta<BannersProps>;

export const Wide: StoryObj = {};

export const Square: StoryObj = {
    args: {
        src: imageBannerSquare,
        size: "square",
        alt: imageBannerSquare,
      },
};

export const Small: StoryObj = {
    args: {
        src: imageBannerSmall,
        size: "sm",
        alt: imageBannerSmall,
      },
};

