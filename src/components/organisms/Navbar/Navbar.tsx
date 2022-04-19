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
  NavInner,
} from "./Navbar.styles";
import { faX } from "@fortawesome/free-solid-svg-icons";

import ImageAnchor from "../../atoms/Image/Image";
import useMediaMatch from "@rooks/use-media-match";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const isMobile = useMediaMatch("(max-width: 1023px)");

  const toggleNav: () => void = () => {
    console.log("clicked");
    setIsOpen(!isOpen);
  };

  return (
    <StyledNav>
      <StyledLink to="/">
        <StyledLogo imageUrl="/images/svgs/nnl_logo_red.svg" width={120} height={45} />
      </StyledLink>

      <NavInner onMouseLeave={isMobile && isOpen ? toggleNav : undefined}>
        <StyledDiv isOpen={isOpen}>
          {isMobile && <CloseBtn icon={faX} onClick={toggleNav} />}
          <LinkContainer>
            <NavLink onClick={() => setIsOpen(false)} to="about">
              About us
            </NavLink>
            <NavLink onClick={() => setIsOpen(false)} to="services/:1">
              Services
            </NavLink>
            <NavLink onClick={() => setIsOpen(false)} to="projects">
              Projects
            </NavLink>
            <CtaButton
              variant="primary"
              type="link"
              link="enquiry"
              handleClick={() => setIsOpen(false)}
            >
              Contact us
            </CtaButton>
          </LinkContainer>
        </StyledDiv>

        {isMobile && (
          <Hamburger isOpen={isOpen} onClick={toggleNav}>
            <ImageAnchor imageUrl="/images/svgs/burger.svg" width={25} height={30} />
          </Hamburger>
        )}
      </NavInner>
    </StyledNav>
  );
};

export default Navbar;
