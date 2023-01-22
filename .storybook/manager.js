// .storybook/manager.ts
import { addons } from "@storybook/addons";
import { themes } from "@storybook/theming";

addons.setConfig({
  // define a theme preset, which could be light (default) or dark
  theme: themes.dark,
});