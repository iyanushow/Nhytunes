import React from "react";
import { StyledHeading, StyledParagraph, StyledSection, TextBlock } from "./Services.styles";

interface IProps extends React.HTMLAttributes<HTMLDivElement> {}

const Services = ({ children, className }: IProps) => {
  return (
    <StyledSection className={className}>
      <TextBlock>
        <StyledHeading level="h2" color="primary">
          We deliver the <br /> best at what we do
        </StyledHeading>

        <StyledParagraph>
          NNL is a global energy company which provides professional services aimed at positioning
          our client’s operations optimally, mitigating the effects of down time that may arise and
          providing technical and advisory solutions. These services are provided by our dedicated
          and professional team on a contract and permanent basis.
        </StyledParagraph>
      </TextBlock>

      {children}
    </StyledSection>
  );
};

export default Services;
