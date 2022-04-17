import React, { useState } from "react";
import {
  Container,
  Form,
  Input,
  InputBlock,
  Label,
  StyledHeading,
  StyledSection,
  Submit,
  TextArea,
} from "./Enquiry.styles";
import EnquiryData from "../../molecules/EnquiryData";

interface FormProps {
  name: string;
  email: string;
  phone: string;
  description: string;
}

const Enquiry = () => {
  const [values, setValues] = useState<FormProps>({
    name: "",
    email: "",
    phone: "",
    description: "",
  });

  const { name, email, phone, description } = values;

  const handleChange: React.ChangeEventHandler<HTMLInputElement | HTMLTextAreaElement> = e => {
    setValues({ ...values, [e.target.name]: e.target.value });
  };
  return (
    <StyledSection>
      <Container>
        <StyledHeading level="h2" color="primary">
          Want to make Enquiry? <br /> Let’s hear you
        </StyledHeading>
        <Form>
          <InputBlock>
            <Label htmlFor="name">Name</Label>
            <Input type="text" value={name} onChange={handleChange} />
          </InputBlock>
          <InputBlock>
            <Label>Email</Label>
            <Input type="email" value={email} onChange={handleChange} />
          </InputBlock>
          <InputBlock>
            <Label>Phone Number</Label>
            <Input type="tel" value={phone} onChange={handleChange} />
          </InputBlock>
          <InputBlock>
            <Label>Description</Label>
            <TextArea rows={5} value={description} onChange={handleChange} />
          </InputBlock>
          <Submit type="submit" variant="primary">
            Submit
          </Submit>
        </Form>
      </Container>

      <EnquiryData />
    </StyledSection>
  );
};

export default Enquiry;
