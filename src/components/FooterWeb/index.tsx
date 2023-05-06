import { ContainerFlex } from "../../styles/global-styles";
import { Icon } from "../Accordian/styles";
import {
  Box,
  Container,
  ContainerList,
  Itens,
  List,
  Links,
  LinksSocialMedia,
  IconLocation,
  Location,
  Copyright,
  BoxInfos,
} from "./styles";
import facebook from "../../assets/fb_logo.svg";
import instagram from "../../assets/insta_logo.svg";
import twiiter from "../../assets/twitter.svg";
import youtube from "../../assets/youtube.svg";
import location from "../../assets/location.svg";

export const FooterWeb = () => {
  return (
    <Container>
      <Box>
        <ContainerList>
          <List>
            <Itens>
              <h5>Shop by Category</h5>
            </Itens>
            <Itens>
              <Links to={`/404`}>Skincare</Links>
            </Itens>
            <Itens>
              <Links to={`/404`}>Personal Care</Links>
            </Itens>
            <Itens>
              <Links to={`/404`}>Handbags</Links>
            </Itens>
            <Itens>
              <Links to={`/404`}>Apparels</Links>
            </Itens>
            <Itens>
              <Links to={`/404`}>Watches</Links>
            </Itens>
            <Itens>
              <Links to={`/404`}>Eye Wear</Links>
            </Itens>
            <Itens>
              <Links to={`/404`}>Jewellery</Links>
            </Itens>
          </List>
          <List>
            <Itens>
              <h5>About</h5>
            </Itens>
            <Itens>
              <Links to={`/404`}>Contact Us</Links>
            </Itens>
            <Itens>
              <Links to={`/404`}>About Us</Links>
            </Itens>
            <Itens>
              <Links to={`/404`}>Handbags</Links>
            </Itens>
            <Itens>
              <Links to={`/404`}>Careers</Links>
            </Itens>
            <Itens>
              <Links to={`/404`}>Press</Links>
            </Itens>
          </List>
          <List>
            <Itens>
              <h5>Policy</h5>
            </Itens>
            <Itens>
              <Links to={`/404`}>Return Policy</Links>
            </Itens>
            <Itens>
              <Links to={`/404`}>Terms of Use</Links>
            </Itens>
            <Itens>
              <Links to={`/404`}>Sitemap</Links>
            </Itens>
            <Itens>
              <Links to={`/404`}>Security</Links>
            </Itens>
            <Itens>
              <Links to={`/404`}>Privacy</Links>
            </Itens>
            <Itens>
              <Links to={`/404`}>EPR Compliance</Links>
            </Itens>
          </List>
        </ContainerList>
        <BoxInfos>
          <ContainerFlex>
            <LinksSocialMedia to={"/404"}>
              <Icon src={facebook} alt="Facebook" />
            </LinksSocialMedia>
            <LinksSocialMedia to={"/404"}>
              <Icon src={instagram} alt="Instagram" />
            </LinksSocialMedia>
            <LinksSocialMedia to={"/404"}>
              <Icon src={twiiter} alt="Twitter" />
            </LinksSocialMedia>
            <LinksSocialMedia to={"/404"}>
              <Icon src={youtube} alt="Youtube" />
            </LinksSocialMedia>
          </ContainerFlex>
          <div>
            <Location>
              <IconLocation src={location} alt="Simblo de local" />
              <span>United States</span>
            </Location>
            <Copyright>© 2021 | Cora Leviene All Rights Reserved</Copyright>
          </div>
        </BoxInfos>
      </Box>
    </Container>
  );
};
