import React from "react";
import {
  Contact,
  ContactBlock,
  Copy,
  FooterSection,
  Inner,
  Logo,
  Outer,
  QuickLinks,
  Return,
  SocialIcon,
  Socials,
  StyledHeading,
  StyledLink,
  Text,
} from "./Footer.styles";

const Footer = () => {
  return (
    <FooterSection>
      <Inner>
        <Logo imageUrl="/images/svgs/nnl_logo.svg" width={120} height={45} />

        <QuickLinks>
          <StyledHeading color="secondary" level="h3">
            Quick Links
          </StyledHeading>
          <StyledLink to="">Vessel Chartering and Brokerage</StyledLink>
          <StyledLink to="">Marine and Offshores Units Surveys</StyledLink>
          <StyledLink to="">Vessel Management</StyledLink>
          <StyledLink to="">Oil and Gas services</StyledLink>
          <StyledLink to="">Marine and Offshore Supplies</StyledLink>
        </QuickLinks>

        <QuickLinks>
          <StyledHeading color="secondary" level="h3">
            Other Links
          </StyledHeading>
          <StyledLink to="">Home</StyledLink>
          <StyledLink to="">About Us</StyledLink>
          <StyledLink to="">Contact</StyledLink>
          <StyledLink to="">Projects Executed</StyledLink>
          <StyledLink to="">Management</StyledLink>
        </QuickLinks>

        <ContactBlock>
          <Contact>
            <StyledHeading color="secondary" level="h3">
              Get in touch
            </StyledHeading>
            <Text>+ 234 803 234 1234</Text>
          </Contact>
          <Contact>
            <StyledHeading color="secondary" level="h3">
              Email Address{" "}
            </StyledHeading>
            <Text>info@nnlglobalenergy.com</Text>
          </Contact>
          <Contact>
            <StyledHeading color="secondary" level="h3">
              Address
            </StyledHeading>
            <Text>Plot 954, Akarigbere Close, Victoria Island, Lagos</Text>
          </Contact>
        </ContactBlock>

        <Socials>
          <SocialIcon width={24} height={24} imageUrl="/images/svgs/facebook.svg"></SocialIcon>
          <SocialIcon width={24} height={24} imageUrl="/images/svgs/instagram.svg"></SocialIcon>
          <SocialIcon width={24} height={24} imageUrl="/images/svgs/twitter.svg"></SocialIcon>
          <SocialIcon width={24} height={24} imageUrl="/images/svgs/youtube.svg"></SocialIcon>
        </Socials>
        <Copy>© 2021</Copy>

        <Return imageUrl="/images/svgs/uparrow.svg" width={16} height={60} />
      </Inner>
      <Outer></Outer>
    </FooterSection>
  );
};

export default Footer;
