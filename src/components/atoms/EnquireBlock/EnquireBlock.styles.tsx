import styled from "styled-components";
import { device } from "../../../utils";
import Button from "../Button";
import Paragraph from "../Paragraph";

export const EnquiryDiv = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  align-items: center;
  gap: 20px;
  padding: 60px 15%;
`;
export const StyledPara = styled(Paragraph)`
  font-size: clamp(1rem, 0.8806rem + 0.597vw, 2rem);
  line-height: 1.5;
  text-align: center;
  width: 200px;
  word-wrap: break-word;
  color: #000000;

  @media (${device.smUp}) {
    width: auto;
    gap: 30px;
  }
`;
export const StyledButton = styled(Button)`
  text-transform: capitalize;
  width: 190px;
`;
