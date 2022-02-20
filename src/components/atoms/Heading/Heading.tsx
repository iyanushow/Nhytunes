import React from "react";
import { StyledHeading } from "./Heading.styles";

interface HeadingProps extends React.HTMLAttributes<HTMLHeadingElement> {
  level?: "h1" | "h2" | "h3" | "h4" | "h5" | "h6";
  aligned?: string;
  className?: string;
  color: "primary" | "secondary";
}

const Heading = ({
  level = "h1",
  aligned = "left",
  children,
  className,
  color = "primary",
}: HeadingProps) => {
  return (
    <StyledHeading aligned={aligned} as={level} className={className} color={color}>
      {children}
    </StyledHeading>
  );
};

export default Heading;
