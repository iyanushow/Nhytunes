import styled from "styled-components";
import Heading from "../components/atoms/Heading";
import Paragraph from "../components/atoms/Paragraph";
import Section from "../components/atoms/Section";
import { device } from "../utils";

export const HeadSection = styled(Section)`
  background: ${props => props.theme.colors.secondary};
  margin: 0;
`;
export const TextBlock = styled.div`
  width: 100%;
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
  align-items: center;
`;
export const StyledHeading = styled(Heading)``;
export const StyledPara = styled(Paragraph)`
  color: #fefefe;
  font-weight: 300;
  font-size: clamp(0.75rem, 0.6604rem + 0.4478vw, 1.5rem);

  @media (${device.smUp}) {
    width: 50%;
  }
`;
