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
  font-size: clamp(1.125rem, 1.0205rem + 0.5224vw, 2rem);
  font-weight: 400;
  line-height: 1.25;
  margin: 16px 0;
`;

export const ContentBox = styled.div`
  padding: 30px 0;

  @media (${device.smUp}) {
    //option one
    display: flex;
    flex-wrap: wrap;
    justify-content: space-between;
    row-gap: 20px;
  }
`;

export const StyledImage = styled(ImageAnchor)`
  /* max-width: 530px; */
  margin: 16px auto;
  transition: all 0.4s ease-in-out;

  @media (${device.smUp}) {
    margin: 0;

    //option one
    width: 48%;

    &:nth-of-type(2) {
      justify-self: right;
      margin-left: auto;
      order: 2;

      position: relative;
      top: -80px;
    }

    //option two

    /* &:nth-of-type(1) {
      float: left;
      width: 48%;
      margin: 0 auto 40px;
    }
    &:nth-of-type(2) {
      float: right;
      width: 48%;
      margin: 30px auto;
    } */
  }

  @media (${device.mdUp}) {
    &:nth-of-type(2) {
      position: relative;
      top: -100px;
    }
  }
`;
// float: right;
//     width: 50%;
//     margin: 20px 0 20px 40px;

export const Content = styled.div`
  font-size: clamp(0.75rem, 0.7052rem + 0.2239vw, 1.125rem);
  font-weight: 300;
  line-height: 180%;
  text-align: justify;
  transition: all 0.4s ease-in-out;
  * {
    font-size: clamp(0.75rem, 0.7052rem + 0.2239vw, 1.125rem);
    line-height: 180%;
    transition: all 0.4s ease-in-out;
  }

  ul {
    margin-left: 20px;
  }

  @media (${device.smUp}) {
    /* &:first-of-type {
      grid-row: 1/4;
      margin: 0;
    }

    &:nth-of-type(2) {
      grid-row: 6/10;
    } */

    flex-basis: 46%;
    align-self: flex-start;

    //method two
    /* &:nth-of-type(1) {
      width: 46%;
      margin-left: auto;
    }
    &:nth-of-type(2) {
      width: 46%;
      margin-right: auto;
    } */
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
