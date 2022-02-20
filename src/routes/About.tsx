import AboutHeader from "../components/molecules/AboutHeader";
import AboutServices from "../components/organisms/AboutServices";
import {
  Block,
  Body,
  Meta,
  MissionBlock,
  MissionSection,
  Quote,
  StyledImageAnchor,
  TeamBlock,
  Text,
  Title,
  StyledHeading,
  StyledText,
  ServicesSection,
} from "../pagestyles/about.styles";

import EnquiryBlock from "../components/atoms/EnquireBlock";

const About = () => {
  return (
    <>
      <AboutHeader />
      <MissionSection>
        <MissionBlock>
          <Block>
            <Title color="primary">Vision</Title>
            <Body>To be the leading energy service company globally.</Body>
          </Block>
          <Block>
            <Title color="primary">Mission</Title>
            <Body>
              We strive to be the leading energy service provider by inculcating Integrity, genuity,
              professionalism, consistency and superior quality in every of our operations and
              service and to ensure that customer satisfaction is at the forefront.
            </Body>
          </Block>
          <Block>
            <Title color="primary">Safety & Health Policy</Title>
            <Body>
              NNL is committed to providing a safe and heathy workplace for all our employee and
              contractors. We believe that all injuries and health hazards are preventable. Ensuring
              the safety and health of our worker is our top priority and excellence in health and
              safety is the key to our long-term goal.
            </Body>
          </Block>
        </MissionBlock>

        <TeamBlock>
          <StyledImageAnchor imageUrl="/images/team.jpeg" width={250} />
          <Quote>
            <Text>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Posuere sodales suspendisse
              pellentesque non quisque ac fermentum erat. Felis, nibh varius lectus et, ut.
              <br />
              <br />
              Posuere sodales suspendisse pellentesque non quisque ac fermentum erat. Felis, nibh
              varius lectus et, ut.
            </Text>

            <Meta>
              <StyledHeading level="h4" color="primary">
                Babatunde Olusegun
              </StyledHeading>
              <StyledText level="h6" color="primary">
                Chief Executive Officer
              </StyledText>
            </Meta>
          </Quote>
        </TeamBlock>
      </MissionSection>
      {/* <AboutServices /> */}
      <ServicesSection>
        <AboutServices />
      </ServicesSection>
      <EnquiryBlock />
    </>
  );
};

export default About;
