import React from "react";
import { HeadSection, StyledHeading, StyledPara, TextBlock } from "../pagestyles/project.styles";
import Products from "../components/molecules/Products";

import EnquiryBlock from "../components/atoms/EnquireBlock";

const Projects = () => {
  return (
    <>
      <HeadSection>
        <TextBlock>
          <StyledHeading color="secondary" level="h2">
            Projects Executed
          </StyledHeading>
          <StyledPara>
            We have provided strategies in initiating project, from conceptual and planning stage to
            the operational, management and project delivery stage in several countries.
          </StyledPara>
        </TextBlock>
      </HeadSection>
      <Products />
      <EnquiryBlock />
    </>
  );
};

export default Projects;
