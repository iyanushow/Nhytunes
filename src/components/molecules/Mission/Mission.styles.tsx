import styled from "styled-components";
import Heading from "../../atoms/Heading";
import Paragraph from "../../atoms/Paragraph/Paragraph";

import { device } from "../../../utils";

export const StyledDiv = styled.div`
  background: ${props => props.theme.colors.primary};

  display: flex;
  flex-wrap: wrap;
  align-items: center;
  position: absolute;
  bottom: 0;
  transform: translateY(45%);
  min-width: 280px;
  max-width: 2560px;
  width: 80%;
  padding: 10px 30px;
  border-radius: 4px;

  @media (${device.lgUp}) {
    padding: 30px 60px;
    justify-content: center;
    gap: 5%;
  }
`;

export const StyledHeading = styled(Heading)`
  margin: 10px 0;

  @media (${device.lgUp}) {
    flex-basis: 30%;
  }
`;
export const StyledParagraph = styled(Paragraph)`
  text-align: justify;
  line-height: 28.8px;
  color: ${props => props.theme.colors.white};
  font-weight: 300;
  font-size: 14px;
  @media (${device.lgUp}) {
    flex-basis: 60%;
  }
`;
