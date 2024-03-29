import { Link } from "react-router-dom";
import {
  Contact,
  ContactBlock,
  Copy,
  FooterSection,
  Inner,
  Logo,
  QuickLinks,
  Return,
  SocialIcon,
  Socials,
  StyledHeading,
  StyledLink,
  Text,
} from "./Footer.styles";

const Footer = () => {
  const scrollToTop = () => {
    window?.scrollTo(0, 0);
  };

  return (
    <FooterSection>
      <Inner>
        <Link to="/">
          <Logo imageUrl="/images/svgs/nnl_logo.svg" width={120} height={45} />
        </Link>

        <QuickLinks>
          <StyledHeading color="secondary" level="h3">
            Quick Links
          </StyledHeading>
          <StyledLink to="/services/:1">Vessel Chartering and Brokerage</StyledLink>
          <StyledLink to="/services/:2">Marine and Offshores Units Surveys</StyledLink>
          <StyledLink to="/services/:3">Vessel Management</StyledLink>
          <StyledLink to="/services/:4">Oil and Gas services</StyledLink>
          <StyledLink to="/services/:5">Marine and Offshore Supplies</StyledLink>
        </QuickLinks>

        <QuickLinks>
          <StyledHeading color="secondary" level="h3">
            Other Links
          </StyledHeading>
          <StyledLink to="/">Home</StyledLink>
          <StyledLink to="/about">About Us</StyledLink>
          <StyledLink to="/enquiry">Contact</StyledLink>
          <StyledLink to="/projects">Projects Executed</StyledLink>
          <StyledLink to="/services/:1">Services</StyledLink>
        </QuickLinks>

        <ContactBlock>
          <Contact>
            <StyledHeading color="secondary" level="h3">
              Get in touch
            </StyledHeading>
            <Text>
              +234 706 979 4016 <br /> +234 811 732 3037
            </Text>
          </Contact>
          <Contact>
            <StyledHeading color="secondary" level="h3">
              Email Address{" "}
            </StyledHeading>
            <Text>
              nnlglobalenergy@gmail.com <br />
              info@nnlge.com
            </Text>
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
        <Copy>© 2022</Copy>

        <Return
          imageUrl="/images/svgs/uparrow.svg"
          width={16}
          height={60}
          handleClick={scrollToTop}
        />
      </Inner>
    </FooterSection>
  );
};

export default Footer;
