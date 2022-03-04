import Section from "../components/atoms/Section";
import Heading from "../components/atoms/Heading";
import Paragraph from "../components/atoms/Paragraph";
import ImageAnchor from "../components/atoms/Image";

import { Link } from "react-router-dom";
import styled from "styled-components";

const StyledSection = styled(Section)`
  height: calc(100vh - 440px);
`;
const StyledImage = styled(ImageAnchor)`
  transform: translateX(100%) rotate(90deg);
  margin: 0;
`;

const NotFound = () => {
  return (
    <StyledSection>
      <Heading level="h1" color="primary">
        Error 404!
      </Heading>

      <Paragraph>This page does not exist</Paragraph>

      <Link to="/">
        <StyledImage imageUrl="/images/svgs/downarrow.svg" width={16} height={60} />
      </Link>
    </StyledSection>
  );
};

export default NotFound;
