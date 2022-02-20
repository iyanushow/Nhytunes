import styled from "styled-components";
import Heading from "../Heading";
import ImageAnchor from "../Image/Image";

export const ProductBox = styled.div`
  max-width: 350px;
  width: 100%;
  flex-grow: 1;
  height: 300px;
  display: flex;
  flex-direction: column;
  /* justify-content: space-between; */
  align-items: center;

  flex-grow: 1;
  gap: 24px;
`;

export const StyledImageAnchor = styled(ImageAnchor)`
  width: 100%;
  height: 250px;

  img {
    object-fit: cover;
    height: 250px;
  }
`;

export const Title = styled(Heading)`
  font-size: clamp(0.875rem, 0.8302rem + 0.2239vw, 1.25rem);
  color: ${props => props.theme.colors.secondary};
  font-weight: 300;
  font-size: 14px;
  line-height: 141%;
  text-align: center;
`;
