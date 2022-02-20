import React from "react";
import { Container, StyledButton, StyledImage } from "./CarouselCard.styles";

interface ICard extends React.HTMLAttributes<HTMLDivElement> {
  url: string;
  btnText: string;
}

const CarouselCard = ({ url, btnText }: ICard) => {
  return (
    <Container>
      <StyledImage imageUrl={url} />

      <StyledButton variant="primary">{btnText}</StyledButton>
    </Container>
  );
};

export default CarouselCard;
