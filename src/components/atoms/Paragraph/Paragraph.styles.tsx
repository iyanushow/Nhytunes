import styled from "styled-components";

export const StyledParagraph = styled.p`
  margin: 10px 0;
  font-size: ${props => props.theme.font.typeScale.heading4};
  color: ${props => props.theme.colors.text};
`;
