import React, { useState } from "react";
import {
  Container,
  Content,
  Form,
  Input,
  InputBlock,
  Label,
  StyledBlock,
  StyledHeading,
  StyledIcon,
  StyledSection,
  StyledText,
  Submit,
  TextArea,
} from "./Enquiry.styles";

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

      <StyledBlock>
        <Content>
          <StyledIcon width={32} height={32} imageUrl="/images/enquiry/email.svg" />
          <StyledText>
            nnlglobalenergy@gmail.com <br />
            info@nnlge.com
          </StyledText>
        </Content>
        <Content>
          <StyledIcon width={32} height={32} imageUrl="/images/enquiry/phone.svg" />
          <StyledText>
            +(234) 706 979 4016
            <br />
            +(234) 811 732 3037
          </StyledText>
        </Content>
        <Content>
          <StyledIcon width={32} height={32} imageUrl="/images/enquiry/location.svg" />
          <StyledText>
            Plot 954 Akarigbere Close <br /> Victoria Island Lagos
          </StyledText>
        </Content>
      </StyledBlock>
    </StyledSection>
  );
};

export default Enquiry;
