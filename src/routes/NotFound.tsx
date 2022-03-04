import { Link } from "react-router-dom";

import Heading from "../components/atoms/Heading";
import Paragraph from "../components/atoms/Paragraph";

import { StyledSection, StyledImage } from "../pagestyles/notfound.styles";

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
