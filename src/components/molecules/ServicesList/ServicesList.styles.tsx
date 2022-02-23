import styled from "styled-components";
import { device } from "../../../utils";

export const StyledDiv = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 12px;
  justify-content: center;
  align-items: center;

  @media (${device.xtUp}) {
    justify-content: flex-start;
  }
  @media (${device.lgUp}) {
    column-gap: 36px;
    row-gap: 30px;
  }
`;
