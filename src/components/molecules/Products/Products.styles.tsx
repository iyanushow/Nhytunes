import styled from "styled-components";
import { device } from "../../../utils";
import Section from "../../atoms/Section";

export const Container = styled(Section)`
  background: #f9f9f9;
  @media (${device.mdUp}) {
    padding: 60px 10%;
  }
  & > div {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
    gap: 40px;
  }
`;
