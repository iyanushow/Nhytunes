import { Link } from "react-router-dom";
import Fade from "react-reveal/Fade";
import Mission from "../../molecules/Mission";
import { Inner, CtaButton, HeroSection, StyledHeading, TextBlock } from "./Hero.styles";

const Hero = () => {
  return (
    <HeroSection>
      <Inner>
        <TextBlock>
          <Fade left>
            <StyledHeading level="h2" aligned="center" color="secondary">
              At NNL, We Sufficiently satisfy our client’s needs
            </StyledHeading>
            <Link to="enquiry" style={{ textDecoration: "none", display: "block" }}>
              <CtaButton variant="primary">Contact us</CtaButton>
            </Link>
          </Fade>
        </TextBlock>

        <Mission />
      </Inner>
    </HeroSection>
  );
};

export default Hero;
