import React from "react";
import { Img, StyledFigure } from "./Image.styles";

export interface ImageProps {
  width?: number;
  height?: number;
  className?: string;
  imageUrl: string;
}

const ImageAnchor = ({ height, width, imageUrl = "", className }: ImageProps) => {
  return (
    <StyledFigure height={height} width={width} className={className}>
      <Img src={imageUrl} />
    </StyledFigure>
  );
};

export default ImageAnchor;
