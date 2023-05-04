import { Link } from "react-router-dom";
import {
  Box,
  ButtonIcons,
  Container,
  ContainerSearchHeader,
  Input,
  Links,
  Navegation,
} from "./styles";
import logo from "../../assets/logo.svg";
import { Icon } from "../Accordian/styles";
import searchIcon from "../../assets/search.svg";
import profile from "../../assets/profile.svg";
import wishlist from "../../assets/wishlist.svg";
import bag from "../../assets/bag.svg";
import { ContainerFlex } from "../../styles/global-styles";

export const HeaderWeb = () => {
  return (
    <Container>
      <Box>
        <Navegation>
          <Link to={"/"}>
            <img src={logo} alt="Logo" />
          </Link>
          <Links to={"/handbags"}>Handbags</Links>
          <Links to={"/watches"}>Watches</Links>
          <Links to={"/skincare"}>Skincare</Links>
          <Links to={"/jewellery"}>Jewellery</Links>
          <Links to={"/apparels"}>Apparels</Links>
        </Navegation>
        <ContainerFlex>
          <ContainerSearchHeader>
            <Icon src={searchIcon} alt="Search Icon" />
            <Input
              type="search"
              placeholder="Search for products or brands....."
            />
          </ContainerSearchHeader>
          <div>
            <ButtonIcons type="button">
              <Icon src={wishlist} alt="wishlist icon" />
            </ButtonIcons>
            <ButtonIcons type="button">
              <Icon src={profile} alt="profile icon" />
            </ButtonIcons>
            <ButtonIcons type="button">
              <Icon src={bag} alt="bag icon" />
            </ButtonIcons>
          </div>
        </ContainerFlex>
      </Box>
    </Container>
  );
};
