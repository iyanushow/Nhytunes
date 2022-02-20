import React from "react";
import { StyledDiv, StyledHeading, StyledParagraph } from "./Mission.styles";

interface MissionProps extends React.HTMLAttributes<HTMLDivElement> {}

const Mission = ({ className }: MissionProps) => {
  return (
    <StyledDiv className={className}>
      <StyledHeading color="secondary">Mission</StyledHeading>
      <StyledParagraph>
        We strive to be the leading energy service provider by inculcating Integrity, genuity,
        professionalism, consistency and superior quality in every of our operations and service and
        to ensure that customer satisfaction is at the forefront.
      </StyledParagraph>
    </StyledDiv>
  );
};

export default Mission;
