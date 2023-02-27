import React, { useState } from "react";
import {
  Container,
  ContainerAcoordian,
  ContainerFlex,
  ContainerFooterMobile,
  ContainerSocialMedia,
  Directs,
  Divider,
  FooterMobileItem,
  IconSocialMedia,
  ItensFooterMobile,
  ListFooterMobile,
  ListFooterMobileNoEdit,
  Location,
  Titles,
} from "./styles";
import arrow from "../../assets/chevron-bottom.svg";
import { IconInverted } from "../Accordian/styles";
import facebookLogo from "../../assets/fb_logo.svg";
import googleLogo from "../../assets/youtube.svg";
import instagramLogo from "../../assets/insta_logo.svg";
import twitterLogo from "../../assets/twitter.svg";
import location from "../../assets/location.svg";

export const FooterMobile = () => {
  const [showFooter, setShowFooter] = useState<boolean>(false);

  const showFooterHandler = () => {
    setShowFooter((prevState) => !prevState);
  };
  return (
    <React.Fragment>
      <ContainerAcoordian onClick={showFooterHandler}>
        <span>More about CORA’L</span>
        {showFooter ? (
          <IconInverted src={arrow} alt="Seta para cima" />
        ) : (
          <img src={arrow} alt="Seta para baixo" />
        )}
      </ContainerAcoordian>
      <ContainerFooterMobile showFooter={showFooter}>
        <Container>
          <ListFooterMobileNoEdit>
            <ItensFooterMobile>
              <h4>Shop by Category</h4>
            </ItensFooterMobile>
            <ItensFooterMobile>
              <FooterMobileItem to={"/404"}>Skincare</FooterMobileItem>
            </ItensFooterMobile>
            <ItensFooterMobile>
              <FooterMobileItem to={"/404"}>Prsonal Care</FooterMobileItem>
            </ItensFooterMobile>
            <ItensFooterMobile>
              <FooterMobileItem to={"/404"}>Handbags</FooterMobileItem>
            </ItensFooterMobile>
            <ItensFooterMobile>
              <FooterMobileItem to={"/404"}>Apparels</FooterMobileItem>
            </ItensFooterMobile>
            <ItensFooterMobile>
              <FooterMobileItem to={"/404"}>Watches</FooterMobileItem>
            </ItensFooterMobile>
            <ItensFooterMobile>
              <FooterMobileItem to={"/404"}>Eye Wear</FooterMobileItem>
            </ItensFooterMobile>
            <ItensFooterMobile>
              <FooterMobileItem to={"/404"}>Jewellery</FooterMobileItem>
            </ItensFooterMobile>
          </ListFooterMobileNoEdit>
        </Container>

        <Container>
          <h3>Policy</h3>
          <ListFooterMobile>
            <ItensFooterMobile>
              <FooterMobileItem to={"/404"}>Return | </FooterMobileItem>
              <FooterMobileItem to={"/404"}>Terms of use | </FooterMobileItem>
              <FooterMobileItem to={"/404"}>Sitemap |</FooterMobileItem>
              <FooterMobileItem to={"/404"}> Security |</FooterMobileItem>
              <FooterMobileItem to={"/404"}>Privacy |</FooterMobileItem>
              <FooterMobileItem to={"/404"}> EPR Compliance</FooterMobileItem>
            </ItensFooterMobile>
          </ListFooterMobile>
        </Container>
        <Container>
          <Titles>About</Titles>
          <ListFooterMobile>
            <ItensFooterMobile>
              <FooterMobileItem to={"/404"}>Contact Us | </FooterMobileItem>
              <FooterMobileItem to={"/404"}>About Us | </FooterMobileItem>
              <FooterMobileItem to={"/404"}>Carees |</FooterMobileItem>
              <FooterMobileItem to={"/404"}>Press</FooterMobileItem>
            </ItensFooterMobile>
          </ListFooterMobile>
        </Container>
        <Divider />
        <Container>
          <ContainerSocialMedia>
            <IconSocialMedia src={facebookLogo} alt="" />
            <IconSocialMedia src={instagramLogo} alt="" />
            <IconSocialMedia src={twitterLogo} alt="" />
            <IconSocialMedia src={googleLogo} alt="" />
          </ContainerSocialMedia>
          <ContainerFlex>
            <img src={location} alt="" />
            <Location>United States</Location>
          </ContainerFlex>
          <Directs>© 2021 | Cora Leviene All Rights Reserved</Directs>
        </Container>
      </ContainerFooterMobile>
    </React.Fragment>
  );
};
