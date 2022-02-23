import styled from "styled-components";
import ImageAnchor from "../../atoms/Image";
import { Link } from "react-router-dom";
import Heading from "../../atoms/Heading";
import Paragraph from "../../atoms/Paragraph";
import { device } from "../../../utils";

export const FooterSection = styled.footer`
  position: relative;
  background: #000000d8;
  font-size: 16px;
  line-height: 90%;
  color: #c4c4c4;

  width: 100%;
  padding: 20px 5%;
  @media (${device.mdUp}) {
    padding: 40px 10%;
  }
`;

export const Inner = styled.div`
  max-width: 2560px;
  margin: 0 auto;
  display: grid;
  grid-template-columns: 1fr 1fr;
  position: relative;
  & > * {
    margin: 20px 0;
  }

  @media (${device.lgUp}) {
    grid-template-columns: repeat(4, 1fr);
    grid-template-rows: repeat(2, 150px) 60px;
  }
`;

export const Outer = styled.div`
  width: 100%;
  background: ${({ theme }) => theme.colors.primary};
  height: 75px;
  position: absolute;
  left: 0;
`;

export const Logo = styled(ImageAnchor)`
  grid-column: 1/2;

  @media (${device.smUp}) {
    grid-column: 1/3;
  }
  @media (${device.lgUp}) {
    grid-column: unset;
  }
`;

export const QuickLinks = styled.div`
  grid-column: 1/3;

  @media (${device.smUp}) {
    grid-column: unset;

    &:nth-of-type(2) {
      justify-self: center;
      min-width: 165px;
    }
  }

  @media (${device.lgUp}) {
    grid-column: 2/3;
    grid-row: 1/3;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    margin: 0;

    &:nth-of-type(2) {
      grid-column: 3/4;
    }
  }
`;

export const StyledLink = styled(Link)`
  display: block;
  text-decoration: none;
  color: ${props => props.theme.colors.grey};
  font-size: ${props => props.theme.font.typeScale.heading5};
  font-weight: 300;
  line-height: 2;
  /* margin: 10px 0; */
`;

export const ContactBlock = styled.div`
  grid-column: 1/3;
  margin: 0;

  @media (${device.smUp}) {
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    margin: 30px 0;
  }
  @media (${device.lgUp}) {
    margin: 0;
    grid-column: 4/5;
    grid-row: 1/3;

    display: flex;
    flex-direction: column;
    justify-content: space-between;
  }
`;

export const Contact = styled.div`
  margin: 10px 0 40px;

  @media (${device.smUp}) {
    &:nth-of-type(2) {
      justify-self: center;
      min-width: 165px;
    }
  }
  @media (${device.lgUp}) {
    margin: 0;
    &:nth-of-type(2) {
      justify-self: unset;
    }
  }
`;

export const StyledHeading = styled(Heading)`
  margin: 10px 0 10px;
  font-size: 1.15rem;
  font-weight: 500;
`;

export const Text = styled(Paragraph)`
  color: ${props => props.theme.colors.grey};
  font-size: ${props => props.theme.font.typeScale.heading5};
  font-weight: 300;
  line-height: 2;
`;

export const SocialIcon = styled(ImageAnchor)``;

export const Return = styled(ImageAnchor)`
  grid-column: 2/3;
  grid-row: 1/2;
  justify-self: flex-end;
  cursor: pointer;

  @media (${device.smUp}) {
    position: absolute;
    grid-column: unset;
    right: 0;
  }
`;

export const Socials = styled.div`
  display: flex;
  gap: 10px;
  align-items: center;

  @media (${device.smUp}) {
    gap: 24px;
  }
  @media (${device.lgUp}) {
    align-self: flex-end;
    margin: 0;
    grid-row: 2/3;
  }
`;

export const Copy = styled(Paragraph)`
  align-self: center;
  justify-self: flex-end;

  @media (${device.smUp}) {
    justify-self: center;
  }
  @media (${device.lgUp}) {
    justify-self: flex-end;
    grid-column: 4;
  }
`;
