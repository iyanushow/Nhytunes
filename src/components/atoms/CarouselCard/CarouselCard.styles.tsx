import styled from "styled-components";
import ImageAnchor from "../Image";
import Button from "../Button";

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  gap: 10px;
`;

export const StyledImage = styled(ImageAnchor)`
  border-radius: ${({ theme }) => theme.borderRadius};
  img {
    width: 100%;
    height: 50vw;
    border-radius: ${({ theme }) => theme.borderRadius};
  }
`;

export const StyledButton = styled(Button)``;
