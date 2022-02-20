import React from "react";
import { EnquiryDiv, StyledButton, StyledPara } from "./EnquireBlock.styles";

const EnquireBlock = () => {
  return (
    <EnquiryDiv>
      <StyledPara>Want to make Enquiry? We are here to respond</StyledPara>
      <StyledButton variant="primary" type="link" link="/enquiry">
        Send us a message
      </StyledButton>
    </EnquiryDiv>
  );
};

export default EnquireBlock;
