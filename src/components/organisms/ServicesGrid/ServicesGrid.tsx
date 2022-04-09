import { useState } from "react";
import { serviceList } from "../../../utils";
import {
  Content,
  ContentBox,
  DataGrid,
  StyledImage,
  ThumbContainer,
  ThumbDiv,
  ThumbGrid,
  ThumbImage,
  ThumbTitle,
  Title,
  Wrapper,
} from "./ServicesGrid.styles";

const ServicesGrid = ({ initialService = 1 }: { initialService: number }) => {
  const [selectedService, setSelectedService] = useState(
    serviceList.find(service => service.id === initialService) || serviceList[0]
  );

  return (
    <Wrapper>
      <DataGrid>
        <Title level="h1" color="primary">
          {selectedService.title}
        </Title>

        <ContentBox>
          <StyledImage imageUrl={selectedService.imageOne} />
          <Content dangerouslySetInnerHTML={{ __html: selectedService.contentOne }} />
          {/* <StyledImage imageUrl={selectedService.imageTwo} /> */}
          {/* <Content dangerouslySetInnerHTML={{ __html: selectedService.contentTwo }} /> */}
        </ContentBox>
      </DataGrid>
      <ThumbGrid>
        <Title level="h1" color="primary">
          Other Services
        </Title>
        <ThumbContainer>
          {serviceList
            .filter(service => service.id !== selectedService.id)
            .map(service => (
              <ThumbDiv key={service.id} onClick={() => setSelectedService(service)}>
                <ThumbImage imageUrl={service.imageOne} />
                <ThumbTitle level="h5" color="primary">
                  {service.title}
                </ThumbTitle>
              </ThumbDiv>
            ))}
        </ThumbContainer>
      </ThumbGrid>
    </Wrapper>
  );
};

export default ServicesGrid;
