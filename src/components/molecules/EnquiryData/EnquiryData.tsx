import React from "react";
import { Content, StyledBlock, StyledIcon, StyledText } from "./EnquiryData.styles";

interface Props extends React.HTMLAttributes<HTMLDivElement> {}

const EnquiryData = ({ className }: Props) => {
  return (
    <StyledBlock className={className}>
      <Content>
        <StyledIcon width={32} height={32} imageUrl="/images/enquiry/email.svg" />
        <StyledText>
          nnlglobalenergy@gmail.com <br />
          info@nnlge.com
        </StyledText>
      </Content>
      <Content>
        <StyledIcon width={32} height={32} imageUrl="/images/enquiry/phone.svg" />
        <StyledText>
          +(234) 706 979 4016
          <br />
          +(234) 811 732 3037
        </StyledText>
      </Content>
      <Content>
        <StyledIcon width={32} height={32} imageUrl="/images/enquiry/location.svg" />
        <StyledText>
          Plot 954 Akarigbere Close <br /> Victoria Island Lagos
        </StyledText>
      </Content>
    </StyledBlock>
  );
};

export default React.memo(EnquiryData);
