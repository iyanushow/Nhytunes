import styled from "styled-components";
import Section from "../components/atoms/Section";
import ImageAnchor from "../components/atoms/Image";

export const StyledSection = styled(Section)`
  height: calc(100vh - 440px);
`;
export const StyledImage = styled(ImageAnchor)`
  transform: translateX(100%) rotate(90deg);
  margin: 0;
`;
