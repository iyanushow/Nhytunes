import styled from "styled-components";
import Section from "../../atoms/Section";
import ImageAnchor from "../../atoms/Image";
import Heading from "../../atoms/Heading";
import { device } from "../../../utils";

export const Wrapper = styled.div``;

export const DataGrid = styled(Section)`
  background: #f9f9f9;
  padding: 20px 5%;
`;

export const Title = styled(Heading)`
  font-size: clamp(1.125rem, 0.9011rem + 1.1194vw, 3rem);
  font-weight: 600;
  line-height: 1.25;
  margin: 16px 0;
`;

export const ContentBox = styled.div`
  margin: 30px 0;
`;

export const StyledImage = styled(ImageAnchor)`
  margin: 16px auto;
  transition: all 0.4s ease-in-out;

  img {
    border-radius: 6px;
  }
`;
// float: right;
//     width: 50%;
//     margin: 20px 0 20px 40px;

export const Content = styled.div`
  font-size: clamp(0.75rem, 0.6903rem + 0.2985vw, 1.25rem);
  font-weight: 300;
  line-height: 180%;
  text-align: justify;
  transition: all 0.4s ease-in-out;
  margin: 30px 0;

  * {
    line-height: 180%;
    font-size: clamp(0.75rem, 0.6903rem + 0.2985vw, 1.25rem);
    font-weight: 300;
    line-height: 180%;
  }

  ul {
    margin-left: 15px;
    margin-top: 40px;
    @media (${device.mdUp}) {
      margin-left: 20px;
    }
  }
`;

export const ThumbGrid = styled(Section)`
  background: #ffffff;
`;
export const ThumbContainer = styled.div`
  width: 100%;
  display: flex;
  flex-wrap: wrap;
  row-gap: 24px;
  column-gap: 10px;
  justify-content: center;
  @media (${device.xsUp}) {
    justify-content: unset;
  }
`;

export const ThumbDiv = styled.div`
  cursor: pointer;
  flex-grow: 1;
  @media (${device.xsUp}) {
    max-width: 220px;
  }
`;

export const ThumbImage = styled(ImageAnchor)`
  @media (${device.xsUp}) {
    width: 200px;
    height: 145px;

    img {
      width: 200px;
      height: 145px;
      object-fit: cover;
    }
  }
`;

export const ThumbTitle = styled(Heading)`
  font-size: clamp(0.75rem, 0.7052rem + 0.2239vw, 1.125rem);
  font-weight: 400;
  line-height: 1.25;
  margin: 5px 0;
`;
