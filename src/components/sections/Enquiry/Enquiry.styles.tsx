import styled from "styled-components";
import { device } from "../../../utils";
import Section from "../../atoms/Section";
import Heading from "../../atoms/Heading";
import Button from "../../atoms/Button";

export const StyledSection = styled(Section)`
  & > div {
    display: flex;
    flex-direction: column;

    gap: 40px;
    width: 100%;
    max-width: 500px;
  }
  @media (${device.mdUp}) {
    padding: 100px 10%;
    & > div {
      max-width: unset;
      flex-direction: row;
      align-items: center;
      justify-content: space-between;
    }
  }
`;

export const Form = styled.form``;
export const Container = styled.div`
  @media (${device.clUp}) {
    width: 55%;
  }
  @media (${device.lgUp}) {
    width: 50%;
  }
`;

export const StyledHeading = styled(Heading)`
  font-size: clamp(1.25rem, 0.8929rem + 1.7857vw, 2.5rem);
  font-weight: 400;
  line-height: 1.5;
  margin-bottom: 20px;
`;

export const InputBlock = styled.div`
  margin: 16px 0;
  @media (${device.clUp}) {
    margin: 30px 0;
  }
`;

export const Label = styled.label`
  font-weight: 400;
  font-size: ${props => props.theme.font.typeScale.heading5};
  line-height: 140%;
  margin-bottom: 4px;
  display: block;
  color: #000000d8;
`;
export const Input = styled.input`
  width: 100%;
  height: 40px;
  background: #fffefe;
  padding: 0 14px;
  border: 1px solid #c4c4c4;
  box-sizing: border-box;
  border-radius: 6px;
  font-size: 14px;

  &:focus,
  :focus-visible,
  :active {
    border: none;
    outline: 1px solid #8e1413;
  }
`;

export const TextArea = styled.textarea`
  width: 100%;
  background: #fffefe;
  padding: 0 14px;
  border: 1px solid #c4c4c4;
  box-sizing: border-box;
  border-radius: 8px;

  font-size: 14px;

  &:focus,
  :focus-visible,
  :active {
    border: none;
    outline: 1px solid #8e1413;
  }
`;

export const Submit = styled(Button)`
  padding: 10px 12%;
  font-size: clamp(0.875rem, 0.7407rem + 0.6716vw, 2rem);
  width: 160px;
  @media (${device.smUp}) {
    padding: 16px 8%;
  }
`;
