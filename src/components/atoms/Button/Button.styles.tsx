import { lighten } from "polished";
import { Link } from "react-router-dom";
import styled, { DefaultTheme } from "styled-components";
import { ButtonProps } from "./Button";

type VariantProps = {
  theme: DefaultTheme;
  variant: string;
};

const buttonVariant = (props: VariantProps) => {
  switch (props.variant) {
    case "primary":
      return `
                background: ${props.theme.button.primaryColor};
                color: ${props.theme.button.primaryText};
                border: 1px solid ${props.theme.button.primaryColor};

                &:hover, &:focus {
                    background: ${props.theme.button.primaryHover};
                }

                &:active {
                    background: ${props.theme.button.primaryHover};
                }
            `;
    case "secondary":
      return `
                background: ${props.theme.button.secondaryColor};
                color: ${props.theme.button.secondaryText};
                border: 1px solid ${props.theme.button.secondaryColor};

                &:hover, &:focus {
                    background: ${props.theme.button.secondaryHover};
                }

                &:active {
                    background: ${props.theme.button.secondaryHover};
                }
            `;

    default:
  }
};

export const StyledButton = styled.button<ButtonProps>`
  padding: 10px 24px;
  color: ${props => props.theme.colors.primary};
  background: ${props => props.theme.colors.white};

  &:hover {
    background: ${props => lighten(0.1, props.theme.colors.white)};
  }

  display: inline-flex;
  padding: 10px 24px;
  font-weight: 400;
  font-size: ${props => props.theme.button.font};
  text-decoration: none;
  text-transform: capitalize;
  text-align: center;
  border-radius: ${props => props.theme.borderRadius};
  min-width: 120px;
  align-items: center;
  justify-content: center;
  cursor: pointer;

  ${props => buttonVariant(props)}
`;

export const StyledLink = styled(Link)`
  cursor: pointer;
  text-decoration: none;
`;
