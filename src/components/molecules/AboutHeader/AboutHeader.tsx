import React from "react";
import {
  StyledSection,
  StyledHeading,
  StyledDiv,
  StyledImageAnchor,
  StyledParagraph,
} from "./AboutHeader.styles";

const AboutHeader = () => {
  return (
    <StyledSection>
      <StyledHeading level="h2" aligned="left" color="primary">
        What NNL Global <br /> Energy is all About
      </StyledHeading>

      <StyledImageAnchor imageUrl="/images/about.jpeg" />

      <StyledDiv>
        <StyledParagraph>
          NNL Global Energy is a subsidiary of Nhytunes Nigeria Limited, a company registered by
          corporate affairs commission having its registered office in Nigeria. It’s objective is to
          carry out certain specialized services in Marine, oil and gas, Energy, Chemical and
          industrial sector. We are a seasoned group of professionals, providing a wide range of
          services across different sectors to sufficiently satisfy our client’s needs. Our global
          presence and track records for quality service delivery has created a niche in the global
          oil and gas sector.
        </StyledParagraph>
      </StyledDiv>
    </StyledSection>
  );
};

export default AboutHeader;
