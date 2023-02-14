import { Link } from "react-router-dom";
import {
  ContainerFooterWeb,
  ItensFooterWeb,
  ListFooter,
  LinkFooterWeb,
  FirstLinkFooterWeb,
  Container,
  LinkSocialMedia,
  Place,
  ContainerFlex,
  ContainerSecondItens,
  Copyright,
} from "./styles";
import facebookLogo from "../../assets/fb_logo.svg";
import googleLogo from "../../assets/fb_logo.svg";
import instagramLogo from "../../assets/fb_logo.svg";
import twitterLogo from "../../assets/fb_logo.svg";
import location from "../../assets/location.svg";

export const FooterWeb = () => {
  return (
    <ContainerFooterWeb>
      <Container>
        <ListFooter>
          <ItensFooterWeb>Shop by Category</ItensFooterWeb>
          <ItensFooterWeb>
            <LinkFooterWeb to={"/"}>Skincare</LinkFooterWeb>
          </ItensFooterWeb>
          <ItensFooterWeb>
            <LinkFooterWeb to={"/"}>Personal Care</LinkFooterWeb>
          </ItensFooterWeb>
          <ItensFooterWeb>
            <LinkFooterWeb to={"/"}>Handbags</LinkFooterWeb>
          </ItensFooterWeb>
          <ItensFooterWeb>
            <LinkFooterWeb to={"/"}>Apparels</LinkFooterWeb>
          </ItensFooterWeb>
          <ItensFooterWeb>
            <LinkFooterWeb to={"/"}>Watches</LinkFooterWeb>
          </ItensFooterWeb>
          <ItensFooterWeb>
            <LinkFooterWeb to={"/"}>Eye Wear</LinkFooterWeb>
          </ItensFooterWeb>
          <ItensFooterWeb>
            <LinkFooterWeb to={"/"}>Jewellery</LinkFooterWeb>
          </ItensFooterWeb>
        </ListFooter>
        <ListFooter>
          <ItensFooterWeb>About</ItensFooterWeb>
          <ItensFooterWeb>
            <LinkFooterWeb to={"/"}>Contact Us</LinkFooterWeb>
          </ItensFooterWeb>
          <ItensFooterWeb>
            <LinkFooterWeb to={"/"}>About Us</LinkFooterWeb>
          </ItensFooterWeb>
          <ItensFooterWeb>
            <LinkFooterWeb to={"/"}>Careers</LinkFooterWeb>
          </ItensFooterWeb>
          <ItensFooterWeb>
            <LinkFooterWeb to={"/"}>Press</LinkFooterWeb>
          </ItensFooterWeb>
        </ListFooter>
        <ListFooter>
          <ItensFooterWeb>Policy</ItensFooterWeb>
          <ItensFooterWeb>
            <LinkFooterWeb to={"/"}>Return Policy</LinkFooterWeb>
          </ItensFooterWeb>
          <ItensFooterWeb>
            <LinkFooterWeb to={"/"}>Terms of Use</LinkFooterWeb>
          </ItensFooterWeb>
          <ItensFooterWeb>
            <LinkFooterWeb to={"/"}>Sitemap</LinkFooterWeb>
          </ItensFooterWeb>
          <ItensFooterWeb>
            <LinkFooterWeb to={"/"}>Security</LinkFooterWeb>
          </ItensFooterWeb>
          <ItensFooterWeb>
            <LinkFooterWeb to={"/"}>Privacy</LinkFooterWeb>
          </ItensFooterWeb>
          <ItensFooterWeb>
            <LinkFooterWeb to={"/"}>EPR Compliance</LinkFooterWeb>
          </ItensFooterWeb>
        </ListFooter>
      </Container>
      <ContainerSecondItens>
        <div>
          <LinkSocialMedia to={"/facebook.com"} target="_blank">
            <img src={facebookLogo} alt="Facebook" />
          </LinkSocialMedia>
          <LinkSocialMedia to={"/facebook.com"} target="_blank">
            <img src={facebookLogo} alt="Facebook" />
          </LinkSocialMedia>
          <LinkSocialMedia to={"/facebook.com"} target="_blank">
            <img src={facebookLogo} alt="Facebook" />
          </LinkSocialMedia>
          <LinkSocialMedia to={"/facebook.com"} target="_blank">
            <img src={facebookLogo} alt="Facebook" />
          </LinkSocialMedia>
        </div>
        <ContainerFlex>
          <img src={location} alt="Location" />
          <Place>United States</Place>
        </ContainerFlex>
        <Copyright>© 2021 | Cora Leviene All Rights Reserved</Copyright>
      </ContainerSecondItens>
    </ContainerFooterWeb>
  );
};
