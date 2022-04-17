import styled from "styled-components";

import Block from "../../atoms/Block";
import { device } from "../../../utils";
import ImageAnchor from "../../atoms/Image";

export const StyledBlock = styled(Block)`
  border-radius: 8px;
  padding: 10px 20px;

  @media (${device.clUp}) {
    padding: 20px 40px;
    width: 40%;
    align-self: center;
  }
`;

export const Content = styled.div`
  border-bottom: 1px solid white;
  padding: 20px 0;
  display: flex;
  /* flex-direction: column; */
  gap: 30px;
  &:last-child {
    border-bottom: none;
  }
`;
export const StyledIcon = styled(ImageAnchor)``;
export const StyledText = styled.p`
  font-weight: 300;
  font-size: 13px;
  line-height: 24px;
  color: #fffefe;
`;
