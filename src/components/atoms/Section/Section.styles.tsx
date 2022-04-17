import styled from "styled-components";
import { device } from "../../../utils";

export const StyledSection = styled.section`
  width: 100%;
  padding: 60px 12px;
  /* max-width: 1440px; */
  @media (${device.smUp}) {
    padding: 60px 5%;
  }
  @media (${device.lgUp}) {
    padding: 60px 10%;
  }
`;

export const InnerDiv = styled.div`
  max-width: 2560px;
  margin: 0 auto;
`;
