import React, { useState } from "react";
import ServiceCard from "../../atoms/ServiceCard";
import { IService } from "../../atoms/ServiceCard/ServiceCard.";
import { StyledDiv } from "./ServicesList.styles";

const ServicesList = ({ className = "" }) => {
  const [services] = useState<IService[]>([
    {
      id: 1,
      heading: "Vessel Chartering and Brokerage",
      imageUrl: "/images/services/ship.svg",
      content:
        "With partners in Europe and Asia, we offer purchase international vessel sales  purchase ",
    },
    {
      id: 2,
      heading: "Vessel Management ",
      imageUrl: "/images/services/vessel.svg",
      content:
        "With partners in Europe and Asia, we offer purchase international vessel sales  purchase ",
    },
    {
      id: 3,
      heading: "Vessel Chartering and Brokerage",
      imageUrl: "/images/services/axle.svg",
      content:
        "With partners in Europe and Asia, we offer purchase international vessel sales  purchase ",
    },
    {
      id: 4,

      heading: "Vessel Management ",
      imageUrl: "/images/services/refinery.svg",
      content:
        "With partners in Europe and Asia, we offer purchase international vessel sales  purchase ",
    },
    {
      id: 5,

      heading: "Vessel Chartering and Brokerage",
      imageUrl: "/images/services/marine.svg",
      content:
        "With partners in Europe and Asia, we offer purchase international vessel sales  purchase ",
    },
  ]);

  return (
    <StyledDiv className={className}>
      {services.map(service => (
        <ServiceCard {...service} key={service.id} />
      ))}
    </StyledDiv>
  );
};

export default ServicesList;
