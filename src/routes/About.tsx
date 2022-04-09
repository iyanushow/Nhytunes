import AboutHeader from "../components/molecules/AboutHeader";
import AboutServices from "../components/organisms/AboutServices";
import {
  Block,
  Body,
  MissionBlock,
  MissionSection,
  TeamBlock,
  Title,
  ServicesSection,
  StyledTitle,
  StyledImageAnchor,
  Content,
  Name,
  Details,
  PersonContainer,
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

        <div>
          <StyledTitle color="secondary">Our Management</StyledTitle>

          <TeamBlock>
            <PersonContainer>
              <StyledImageAnchor imageUrl="https://res.cloudinary.com/di7pnx5q2/image/upload/f_auto,q_auto:best/v1649494917/nhytunes/mgt/babatunde.jpg" />
              <Content>
                <Name level="h3" aligned="left" color="primary">
                  Babatunde Olusegun
                </Name>
                <Details>
                  A seasoned Maritime Expert with over 10 years’ progressive experience. He was
                  trained by Lloyds as Offshore and marine surveyor, trained by the ABS as marine
                  Auditor, trained by the DNV as a vessel manager. He has held and outperformed
                  different strategy roles with local and international marine companies, functioned
                  in management capacity as the Designated Person Ashore, Marine heavy lift project
                  management, warranty surveyor and a marine consultant to some indigenous marine
                  company.
                  <br />
                  <br />
                  He holds Post Graduate Degree in Maritime communication and Navigation from
                  university of Lagos and Maritime Transport and Management for Maritime Academy of
                  Nigeria Oron He is currently the Managing Director of NNL Global Energy saddle
                  with overall responsibility of managing the affairs of the company
                </Details>
              </Content>
            </PersonContainer>

            <PersonContainer>
              <StyledImageAnchor imageUrl="https://res.cloudinary.com/di7pnx5q2/image/upload/f_auto,q_auto:best/v1649492765/nhytunes/mgt/kadiri.jpg" />
              <Content>
                <Name level="h3" aligned="left" color="primary">
                  KADIRI O. KUBURAT{" "}
                </Name>
                <Details>
                  A full time certified occupational health, safety and environmental compliance
                  consultant who is NEBOSH IGC, ISPON – IHSE 1,2, &3, ISO 45001 (occupational health
                  and safety management system) 9001 (Quality management system) and ISO 14001
                  (Environmental Management system). Afrisafe touch bearer award.
                  <br />
                  <br />
                  She holds a combined M. Sc Degree in Biotechnology, Bioprocessing and Business
                  Management from the university of Warwick United Kingdom and a B.sc in
                  Biochemistry from the university of Leicester Uk
                </Details>
              </Content>
            </PersonContainer>

            <PersonContainer>
              <StyledImageAnchor imageUrl="https://res.cloudinary.com/di7pnx5q2/image/upload/f_auto,q_auto:best/v1649492765/nhytunes/mgt/abdel.jpg" />
              <Content>
                <Name level="h3" aligned="left" color="primary">
                  Capt. Abdelkader Nasser Rezk{" "}
                </Name>
                <Details>
                  A Master Mariner Rig move mater, Heavy lift operation with over 12 years’
                  international experience. He has conducted successfully different rig move
                  operation from UAE to Indonesia sea, Qatar Abu Dhabi and to west Africa.
                  <br />
                  <br />
                  He Holds B.sc in Maritime Transport Technology from Arab Academy of Science and
                  Technology and Maritime Transport Abu quir Egypt as well as Master Unlimited
                  License from the same institution
                </Details>
              </Content>
            </PersonContainer>
          </TeamBlock>
        </div>
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
