import styled from "styled-components";

interface HeadingProps {
  as: string;
  aligned?: string;
  children: React.ReactNode;
}

export const StyledHeading = styled.h1<HeadingProps>`
  text-align: ${props => props.aligned};
  color: ${props =>
    props.color === "primary" ? props.theme.colors.black : props.theme.colors.white};
`;
