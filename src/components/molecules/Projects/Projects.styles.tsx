import styled from "styled-components";
import { device } from "../../../utils";
import Heading from "../../atoms/Heading";
import Paragraph from "../../atoms/Paragraph";
import Section from "../../atoms/Section";
import Product from "../../atoms/Product";
import Button from "../../atoms/Button";
import { darken } from "polished";

export const StyledProduct = styled(Product)`
  position: relative;
  height: 250px;
  figure,
  img {
    height: 200px;
  }

  @media (${device.smUp}) {
    width: 230px;
  }
  @media (${device.clUp}) {
    width: 240px;
  }

  &:hover > div:first-child {
    opacity: 1;
    visibility: visible;
    height: 200px;
  }
`;
export const HoverDiv = styled.div`
  position: absolute;
  width: 100%;
  height: 100%;
  background: #000000c4;
  display: flex;
  justify-content: center;
  align-items: center;

  transition: all 0.3s ease-in-out;
  opacity: 0;
  visibility: hidden;
  height: 0;
`;

export const Text = styled(Paragraph)`
  color: white;
  font-size: 14px;
  font-weight: 300;
  width: 80%;
  margin: 0 auto;
  text-align: center;
`;
export const StyledDiv = styled.div`
  margin: 60px auto;

  display: flex;
  flex-wrap: wrap;
  gap: 12px;
  justify-content: center;
  align-items: center;

  @media (${device.mdUp}) {
    column-gap: 36px;
    row-gap: 30px;
  }
`;

export const Container = styled(Section)`
  background: #fff;
`;
export const TextBlock = styled.div`
  text-align: center;
  font-weight: 300;
  width: 60%;
  margin: 10px auto;
`;

export const Title = styled(Heading)`
  font-size: clamp(1rem, 0.8806rem + 0.597vw, 2rem);
`;

export const Subtitle = styled(Paragraph)`
  font-size: clamp(0.75rem, 0.7052rem + 0.2239vw, 1.125rem);
`;

export const BtnGroup = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;

  a {
    text-decoration: none;
  }
`;

export const StyledButton = styled(Button)`
  background: transparent;
  outline: 1px solid ${({ theme }) => theme.colors.primary};
  border: none;
  text-decoration: none;
  color: ${({ theme }) => theme.colors.primary};
  width: 180px;
  border-radius: 4px;
  &:hover,
  &:focus {
    opacity: 0.8;
    background: ${darken(0.02, "#8E1413")};
    color: white;
  }
`;
