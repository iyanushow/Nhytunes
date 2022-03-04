import styled from "styled-components";
import Heading from "../components/atoms/Heading";
import Paragraph from "../components/atoms/Paragraph";
import Section from "../components/atoms/Section";
import ImageAnchor from "../components/atoms/Image";
import { device } from "../utils";
import { Services } from "../components/sections";

export const MissionSection = styled(Section)``;

export const MissionBlock = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 20px;

  @media (${device.smUp}) {
    gap: 30px;
  }
`;

export const Block = styled.div`
  @media (${device.smUp}) {
    width: 100%;
    display: flex;
    justify-content: space-between;
  }
`;

export const Title = styled(Heading)`
  color: ${props => props.theme.colors.primary};
  font-size: clamp(1rem, 0.8806rem + 0.597vw, 2rem);
  font-weight: 400;
  text-transform: capitalize;

  @media (${device.smUp}) {
    flex-basis: 30%;
  }
`;

export const Body = styled(Paragraph)`
  font-size: clamp(0.75rem, 0.7052rem + 0.2239vw, 1.125rem);
  font-weight: 300;
  text-align: justify;

  @media (${device.smUp}) {
    flex-basis: 60%;
  }
`;

export const TeamBlock = styled.div`
  margin: 30px auto;
  display: flex;
  flex-wrap: wrap;
  justify-content: center;

  @media (${device.smUp}) {
    justify-content: space-between;
  }

  @media (${device.clUp}) {
    margin: 80px auto;
  }
`;

export const StyledImageAnchor = styled(ImageAnchor)`
  @media (${device.smUp}) {
    flex-basis: 40%;
  }
`;
export const Quote = styled.div`
  margin: 30px auto;
  max-width: 600px;
  @media (${device.smUp}) {
    flex-basis: 40%;
    margin: 10px auto;
  }
`;
export const Text = styled.p`
  font-style: normal;
  font-weight: 300;
  font-size: clamp(0.75rem, 0.6903rem + 0.2985vw, 1.25rem);
  line-height: 1.5;
  color: #000000d8;
`;
export const Meta = styled.div`
  margin: 20px 0;
  display: flex;
  flex-direction: column;
  gap: 4px;
`;

export const StyledHeading = styled(Heading)`
  font-style: normal;
  font-weight: bold;
  font-size: clamp(0.75rem, 0.6903rem + 0.2985vw, 1.25rem);

  color: #000000;
`;
export const StyledText = styled(StyledHeading)`
  font-style: normal;
  font-weight: 300;
`;

export const ServicesSection = styled(Services)`
  & > div {
    gap: 40px;
  }
`;
