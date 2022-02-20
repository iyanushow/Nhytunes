import styled from "styled-components";

import ImageAnchor from "../Image";
import Heading from "../Heading";
import Paragraph from "../Paragraph";
import { device } from "../../../utils";

interface ImageProps {
  width: number;
  height: number;
  className?: string;
}

export const StyledDiv = styled.div`
  padding: 10px;
  background: ${props => props.theme.colors.white};
  box-shadow: 0px 4px 50px #00000014;
  border-radius: 4px;
  height: 231px;
  max-width: 540px;
  width: 90%;

  @media (${device.xtUp}) {
    width: 48%;
  }

  @media (${device.xsUp}) {
    width: 48%;
    min-width: 165px;
  }

  @media (${device.mdUp}) {
    padding: 20px;
  }
`;

export const StyledInner = styled.div`
  display: flex;
  flex-direction: column;
`;

export const StyledImageAnchor = styled(ImageAnchor)<ImageProps>`
  background: ${props => props.theme.colors.grey};
  border-radius: 50%;

  padding: 10px;
  img {
    width: ${props => `${props.width - 20}px`};
    height: ${props => `${props.height - 20}px`};
  }
`;

export const StyledHeading = styled(Heading)`
  font-size: clamp(0.875rem, 0.7407rem + 0.6716vw, 2rem);
  color: ${props => props.theme.colors.primary};
  font-weight: 600;
  margin: 5px 0;

  @media (${device.xtUp}) {
    height: 43px;
  }
`;

export const Content = styled(Paragraph)`
  font-size: clamp(0.75rem, 0.6903rem + 0.2985vw, 1.25rem);
  color: #5d6070;
  font-weight: 400;
`;
