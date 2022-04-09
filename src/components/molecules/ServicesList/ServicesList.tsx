import React from "react";
import ServiceCard from "../../atoms/ServiceCard";
import { IService } from "../../atoms/ServiceCard/ServiceCard.";
import { StyledDiv } from "./ServicesList.styles";

const services: IService[] = [
  {
    id: 1,
    heading: "Vessel Chartering and Brokerage",
    imageUrl: "/images/services/ship.svg",
    content:
      "With partners in Europe and Asia, we offer international vessel sales and purchase for clients, this activity is handled by our professional brokers.",
  },
  {
    id: 2,
    heading: "Vessel Management ",
    imageUrl: "/images/services/vessel.svg",
    content:
      "NNL is a world class maritime service provider. We provide commercial, technical and marine superintendent services for a wide range of vessel types.",
  },
  {
    id: 3,
    heading: "Marine and Offshores Units Surveys  ",
    imageUrl: "/images/services/axle.svg",
    content:
      "NNL carries out a wide range of Marine and Offshore units. Survey which includes the following:Marine Surveys ,Warranty surveys  ",
  },
  {
    id: 4,

    heading: "Oil and Gas services  ",
    imageUrl: "/images/services/refinery.svg",
    content:
      "NNL offer unmatchable professional services to the oil and gas industry, with our local and foreign strategic partners, we carry out: Rigging/loose lifting equipment... ",
  },
  {
    id: 5,

    heading: "Marine and Offshore Supplies",
    imageUrl: "/images/services/marine.svg",
    content:
      "NNL provides other services, such as general supplies, supplies of petroleum products, provision and supplies of industrial rag",
  },
];

const ServicesList = ({ className = "" }) => {
  return (
    <StyledDiv className={className}>
      {services.map(service => (
        <ServiceCard {...service} key={service.id} />
      ))}
    </StyledDiv>
  );
};

export default ServicesList;
