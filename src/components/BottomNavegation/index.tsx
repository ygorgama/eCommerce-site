import { BottonNavegationLink } from "../BottomNavegationLink";
import { Container } from "./styles";
import homeDark from "../../assets/home-dark.svg";
import home from "../../assets/home.svg";
import homeBlur from "../../assets/home-blur.svg";
import categoriesDark from "../../assets/categories-dark.svg";
import categories from "../../assets/categories.svg";
import categoriesBlur from "../../assets/categories-blur.svg";
import profileDark from "../../assets/profile-dark.svg";
import profile from "../../assets/profile.svg";
import profileBlur from "../../assets/profile-blur.svg";
import bagDark from "../../assets/bag-dark.svg";
import bag from "../../assets/bag.svg";
import bagBlur from "../../assets/bag-blur.svg";

export interface BottomNavegationProps {
  theme: "primary" | "bright";
}

export const BottonNavegation = ({ theme }: BottomNavegationProps) => {
  return (
    <Container>
      <BottonNavegationLink
        to="/home"
        iconBlur={homeBlur}
        iconBright={home}
        iconPrimary={homeDark}
        label={"Home"}
        theme={theme}
      />
      <BottonNavegationLink
        to="/categories"
        iconBlur={categoriesBlur}
        iconBright={categories}
        iconPrimary={categoriesDark}
        label={"Categories"}
        theme={theme}
      />
      <BottonNavegationLink
        to="/profile"
        iconBlur={profileBlur}
        iconBright={profile}
        iconPrimary={profileDark}
        label={"Profile"}
        theme={theme}
      />

      <BottonNavegationLink
        to="/bag"
        iconBlur={bagBlur}
        iconBright={bag}
        iconPrimary={bagDark}
        label={"Bag"}
        theme={theme}
      />
      {/* <BottonNavegationLink
        to="/home"
        iconBlur={homeBlur}
        iconBright={home}
        iconPrimary={homeDark}
        label={"Home"}
        theme={theme}
      /> */}
    </Container>
  );
};
