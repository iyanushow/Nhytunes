import { darken } from "polished";
import { DefaultTheme } from "styled-components";
import { colors } from "./colors";

import { typeScale } from "./typography";

export const theme: DefaultTheme = {
  borderRadius: "4px",
  colors,
  font: {
    typeScale,
    color: "#ffffff",
  },
  button: {
    font: typeScale["heading5"],
    primaryColor: colors.primary,
    primaryHover: darken(0.1, colors.primary),
    primaryText: colors.white,
    secondaryColor: colors.secondary,
    secondaryHover: darken(0.1, colors.secondary),
    secondaryText: colors.white,
  },
};
