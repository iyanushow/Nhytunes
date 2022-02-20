import { useState } from "react";
import {
  CtaButton,
  Hamburger,
  LinkContainer,
  NavLink,
  StyledDiv,
  StyledNav,
  StyledLogo,
  StyledLink,
  CloseBtn,
} from "./Navbar.styles";
import { faX } from "@fortawesome/free-solid-svg-icons";

import ImageAnchor from "../../atoms/Image/Image";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleNav: () => void = () => {
    console.log("clicked");
    setIsOpen(!isOpen);
  };

  return (
    <StyledNav>
      <StyledLink to="/">
        <StyledLogo imageUrl="/images/svgs/nnl_logo_red.svg" width={120} height={45} />
      </StyledLink>

      <StyledDiv isOpen={isOpen}>
        <CloseBtn icon={faX} size="2x" onClick={toggleNav} />
        <LinkContainer>
          <NavLink to="about">About us</NavLink>
          <NavLink to="services">Services</NavLink>
          <NavLink to="projects">Projects</NavLink>
          <CtaButton variant="primary" type="link" link="enquiry">
            Contact us
          </CtaButton>
        </LinkContainer>
      </StyledDiv>

      <Hamburger isOpen={isOpen} onClick={toggleNav}>
        <ImageAnchor imageUrl="/images/svgs/burger.svg" />
      </Hamburger>
    </StyledNav>
  );
};

export default Navbar;
