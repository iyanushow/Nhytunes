import React from "react";
import { Img, StyledFigure } from "./Image.styles";

export interface ImageProps {
  width?: number;
  height?: number;
  className?: string;
  imageUrl: string;
  handleClick?: React.MouseEventHandler<HTMLElement>;
}

const ImageAnchor = ({ height, width, imageUrl = "", className, handleClick }: ImageProps) => {
  return (
    <StyledFigure height={height} width={width} className={className} onClick={handleClick}>
      <Img src={imageUrl} />
    </StyledFigure>
  );
};

export default ImageAnchor;
