import styled from "styled-components";
import ImageAnchor from "../../atoms/Image";
import Button from "../../atoms/Button";

export const Thumbs = styled.div`
  margin: 20px auto;
  display: flex;
  gap: 10px;
  align-items: center;
  overflow: hidden;
  .alice-carousel {
    width: 80%;
  }
  .alice-carousel__stage {
    display: flex;
    gap: 2px;
  }
  .alice-carousel__stage-item {
    width: 110px !important;
    height: auto;
  }
`;
export const StyledButton = styled(Button)`
  position: absolute;
  top: 50%;
  transform: translateY(-50%);

  &:first-child {
    left: 0;
  }

  &:last-child {
    right: 0;
  }
`;

export const StyledButtonWrapper = styled.div`
  display: flex;
  position: absolute;
  top: 50%;
  transform: translateY(-50%);
  width: 100%;
  justify-content: space-between;
`;

export const StyledImage = styled(ImageAnchor)`
  width: 110px;
  height: 60px;
  img {
    width: 108px;
    height: 60px;
  }
`;

export const Thumb = styled.div`
  border: 1px solid ${({ theme }) => theme.colors.primary};
`;
