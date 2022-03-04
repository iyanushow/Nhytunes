import styled from "styled-components";
import Section from "../../atoms/Section";
import Heading from "../../atoms/Heading";
import Paragraph from "../../atoms/Paragraph";
import { device } from "../../../utils";

export const StyledSection = styled(Section)`
  background: ${props => props.theme.colors.grey};
  & > div {
    display: flex;
    flex-wrap: wrap;
    gap: 60px;
  }

  @media (${device.mdUp}) {
    padding: 100px 10%;
  }
`;

export const TextBlock = styled.div`
  margin: 0 0 20px;

  @media (${device.mdUp}) {
    display: flex;
    justify-content: space-between;
    & > * {
      width: 48%;
    }
  }
`;

export const StyledHeading = styled(Heading)`
  font-size: clamp(1.25rem, 0.8929rem + 1.7857vw, 2.5rem);
  font-weight: 400;
  line-height: 1.5;
  letter-spacing: 0em;
  margin-bottom: 20px;
`;

export const StyledParagraph = styled(Paragraph)`
  font-size: clamp(0.8rem, 0.6903rem + 0.2985vw, 1.25rem);
  font-weight: 400;
  line-height: 29px;
  text-align: justify;

  @media (${device.lgUp}) {
    font-size: clamp(0.75rem, 0.6306rem + 0.597vw, 1.75rem);
    font-weight: 300;
    line-height: 1.8;
    margin: 0 0 20px 0;
  }
`;
