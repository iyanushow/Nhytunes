import styled from "styled-components";
import { Link } from "react-router-dom";
import { device } from "../../../utils/mediaQueries";
import Button from "../../atoms/Button";
import ImageAnchor from "../../atoms/Image";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

interface ChangeProps {
  isOpen: boolean;
}

export const StyledNav = styled.nav`
  display: flex;
  align-items: center;
  justify-content: space-between;
  height: 60px;
  padding: 0 5%;
`;

export const NavInner = styled.div`
  @media (${device.clUp}) {
    width: 100%;
  }
`;

export const Hamburger = styled.div<ChangeProps>`
  display: ${props => (props.isOpen ? "none" : "block")};
  cursor: pointer;
  z-index: 10;
`;

export const CloseBtn = styled(FontAwesomeIcon)`
  cursor: pointer;
  position: absolute;
  right: 20px;
  top: 10px;
  font-size: 24px;
  width: 24px;
`;

export const StyledDiv = styled.div<ChangeProps>`
  width: 65%;
  max-width: 300px;
  height: 320px;
  z-index: 2;
  color: ${props => props.theme.colors.white};
  display: flex;
  align-items: center;
  position: fixed;
  right: 0;
  top: 0;
  background: ${props => props.theme.colors.primary};
  clip-path: ${props =>
    props.isOpen ? "circle(2000px at 90% -10%) " : "circle(30px at 100% -10% )"};
  pointer-events: ${props => (props.isOpen ? "all" : "none")};
  transition: all 0.5s ease-in-out;
  font-size: 10px;
  @media (${device.clUp}) {
    position: static;
    max-width: none;
    width: 100%;
    background: ${props => props.theme.colors.white};
    color: ${props => props.theme.colors.black};
    height: 60px;
    /* padding: 0 80px; */

    clip-path: none;
    pointer-events: all;
  }

  svg {
    display: ${props => (props.isOpen ? "unset" : "none")};
  }
`;

export const LinkContainer = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  height: 270px;
  justify-content: space-between;
  align-items: center;

  @media (${device.clUp}) {
    margin: 0 0 0 auto;
    flex-direction: row;
    justify-content: initial;
    gap: 60px;
    max-width: fit-content;
    height: auto;
  }
`;

export const NavLink = styled(Link)`
  text-decoration: none;
  color: inherit;
  font-size: ${props => props.theme.font.typeScale.heading4};
  font-weight: 300;
  cursor: pointer;

  display: flex;
  width: 100%;
  text-align: center;
  height: 100%;
  justify-content: center;
  align-items: center;
  border-bottom: 1px solid #f7f7f74a;

  @media (${device.clUp}) {
    font-size: ${props => props.theme.font.typeScale.heading5};
    font-weight: 400;
    width: auto;
    height: auto;
    border-bottom: none;
  }
`;

export const CtaButton = styled(Button)`
  display: flex;
  width: 100%;
  text-align: center;
  height: 100%;
  justify-content: center;
  align-items: center;

  @media (${device.clUp}) {
    width: auto;
    height: auto;
  }
`;

export const StyledLogo = styled(ImageAnchor)`
  height: 100%;
  width: 80px;
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const StyledLink = styled(Link)`
  cursor: pointer;
  text-decoration: none;
`;
