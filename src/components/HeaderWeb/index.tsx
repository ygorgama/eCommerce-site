import { Link } from "react-router-dom";
import {
  ActionDiv,
  ButtonsHeader,
  ContainerHeaderWeb,
  ContainerSearchHeaderWeb,
  IconHeaderWeb,
  InputSearchHeaderWeb,
  LinksHeaderWeb,
  List,
  ListItem,
  NavigationHeaderWeb,
} from "./styles";
import logo from "../../assets/logo.svg";
import search from "../../assets/search.svg";
import profile from "../../assets/profile.svg";
import bag from "../../assets/bag.svg";
import wishlist from "../../assets/wishlist.svg";

export const HeaderWeb = () => {
  return (
    <ContainerHeaderWeb>
      <NavigationHeaderWeb>
        <Link to={"/"}>
          <img src={logo} alt="Logo" />
        </Link>
        <List>
          <ListItem>
            <LinksHeaderWeb to={"/handbags"}>Handbags</LinksHeaderWeb>
          </ListItem>
          <ListItem>
            <LinksHeaderWeb to={"/watches"}>Watches</LinksHeaderWeb>
          </ListItem>
          <ListItem>
            <LinksHeaderWeb to={"/skincare"}>Skincare</LinksHeaderWeb>
          </ListItem>
          <ListItem>
            <LinksHeaderWeb to={"/jewellery"}>Jewellery</LinksHeaderWeb>
          </ListItem>
          <ListItem>
            <LinksHeaderWeb to={"/apparels"}>Apparels</LinksHeaderWeb>
          </ListItem>
        </List>
      </NavigationHeaderWeb>
      <ActionDiv>
        <ContainerSearchHeaderWeb>
          <IconHeaderWeb src={search} alt="Seach Icon" />
          <InputSearchHeaderWeb placeholder="Search for products or brands....."/>
        </ContainerSearchHeaderWeb>
        <div>
          <ButtonsHeader>
            <img src={wishlist} alt="Wishlist" />
          </ButtonsHeader>
          <ButtonsHeader>
            <img src={profile} alt="Profile" />
          </ButtonsHeader>
          <ButtonsHeader>
            <img src={bag} alt="Bag" />
          </ButtonsHeader>
        </div>
      </ActionDiv>
    </ContainerHeaderWeb>
  );
};
