import styled from "styled-components";

interface FigureProps {
  width?: number;
  height?: number;
  className?: string;
}

export const StyledFigure = styled.figure<FigureProps>`
  width: ${({ width }) => (width ? `${width}px` : "100%")};
  height: ${({ height }) => (height ? `${height}px` : "auto")};

  margin: 0;
`;

export const Img = styled.img`
  width: 100%;
  height: auto;
  object-fit: cover;
`;
