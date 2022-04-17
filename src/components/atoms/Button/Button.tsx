import React from "react";
import { StyledButton, StyledLink } from "./Button.styles";

export interface ButtonProps {
  children: React.ReactNode;
  variant: "primary" | "secondary";
  type?: "button" | "link" | "submit" | "reset" | undefined;
  className?: string;
  link?: string;
  handleClick?: React.MouseEventHandler<HTMLButtonElement>;
}

const Button = ({
  variant = "primary",
  type = "button",
  children,
  link = "",
  className,
  handleClick,
  ...rest
}: ButtonProps) => {
  if (type === "link") {
    return (
      <StyledLink to={link} className={className}>
        <StyledButton variant={variant} type="button" {...rest}>
          {" "}
          {children}
        </StyledButton>
      </StyledLink>
    );
  }

  return (
    <StyledButton
      variant={variant}
      type={type}
      onClick={handleClick}
      className={className}
      {...rest}
    >
      {" "}
      {children}
    </StyledButton>
  );
};

export default Button;
