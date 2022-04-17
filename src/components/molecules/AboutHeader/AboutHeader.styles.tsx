import styled from "styled-components";
import { device } from "../../../utils/mediaQueries";
import Heading from "../../atoms/Heading";
import ImageAnchor from "../../atoms/Image";
import Paragraph from "../../atoms/Paragraph";
import Button from "../../atoms/Button";
import Section from "../../atoms/Section";
import { Link } from "react-router-dom";

export const StyledSection = styled(Section)`
  padding: 20px 5% 40px;
  @media (${device.clUp}) {
    padding: 40px 5%;
    & > div {
      display: grid;

      grid-template-columns: repeat(auto-fit, minmax(400px, 1fr));
      grid-template-rows: repeat(6, 1fr);
      justify-content: space-between;
      column-gap: 40px;
    }
  }
  @media (${device.xlUp}) {
    & > div {
      justify-items: flex-start;
    }
  }
`;

export const StyledHeading = styled(Heading)`
  font-size: clamp(1.25rem, 0.8929rem + 1.7857vw, 2.5rem);
  font-weight: 400;
  line-height: 30px;
  letter-spacing: 0em;
  margin: 20px 30% 20px 0;

  @media (${device.clUp}) {
    margin: 0;
    line-height: 1.5;
    grid-row: 1/3;
    margin: 0 30% 0 0;
  }
  @media (${device.xlUp}) {
    margin: 0 60% 0 0;
  }
`;

export const StyledParagraph = styled(Paragraph)`
  font-size: clamp(0.8rem, 0.6903rem + 0.2985vw, 1.25rem);
  font-weight: 300;
  line-height: 29px;
  text-align: justify;

  @media (${device.lgUp}) {
    font-size: clamp(0.875rem, 0.75rem + 0.625vw, 1.75rem);
    line-height: 1.8;
  }
`;

export const StyledButton = styled(Button)``;

export const StyledImageAnchor = styled(ImageAnchor)`
  img {
    height: 100%;
  }
  @media (${device.clUp}) {
    order: 2;
    grid-row: 1/7;
  }
`;

export const StyledDiv = styled.div`
  @media (${device.clUp}) {
    grid-row: 3/7;
    width: 90%;
  }
`;

export const StyledLink = styled(Link)`
  text-decoration: none;
`;
export const ImageDiv = styled.div`
  position: relative;
  width: 100%;
`;
