import styled from "styled-components";
import { device } from "../../../utils/mediaQueries";
import { darken } from "polished";

import Heading from "../../atoms/Heading";
import Button from "../../atoms/Button";

export const HeroSection = styled.section`
  background-image: url("/images/herobg.jpg");
  background-position: -650px center;
  background-repeat: no-repeat;
  height: calc(100vh - 60px);
  max-height: 510px;

  @media (${device.smUp}) {
    max-height: none;
    background-position: center top;
    background-size: cover;
  }
`;

export const Inner = styled.div`
  width: 100%;
  position: relative;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const TextBlock = styled.div`
  max-width: 700px;
  width: 100%;
  padding: 0 20px;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 20px;
  transform: translateY(-40%);

  @media (${device.smUp}) {
    transform: none;
    gap: 40px;
  }
`;

export const StyledHeading = styled(Heading)`
  color: ${props => props.theme.colors.white};
  font-weight: 700;
  text-align: center;
  font-size: clamp(1.5rem, 1.1418rem + 1.791vw, 4.5rem);
`;

export const CtaButton = styled(Button)`
  padding: 10px 12%;
  color: ${props => props.theme.colors.primary};
  background: ${props => props.theme.colors.white};
  font-size: clamp(0.875rem, 0.7407rem + 0.6716vw, 2rem);

  &:hover,
  :active,
  :focus {
    background: ${props => darken(0.2, props.theme.colors.white)};
  }

  @media (${device.smUp}) {
    padding: 16px 50px;
  }
`;
