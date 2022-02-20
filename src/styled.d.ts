import "styled-components";

declare module "styled-components" {
  export interface DefaultTheme {
    borderRadius: string;
    colors: {
      primary: string;
      secondary: string;
      white: string;
      black: string;
      text: string;
      grey: string;
    };
    font: {
      typeScale: {
        heading: string;
        heading2: string;
        heading3: string;
        heading4: string;
        heading5: string;
        heading6: string;
        paragraph: string;
        smallText: string;
        tinyText: string;
      };
      color: string;
    };
    button: {
      font: string;
      primaryColor: string;
      primaryHover: string;
      primaryText: string;
      secondaryColor: string;
      secondaryHover: string;
      secondaryText: string;
    };
  }
}
