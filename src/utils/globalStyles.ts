import { createGlobalStyle } from "styled-components";

export const GlobalStyles = createGlobalStyle`
  html{
    box-sizing: border-box;
    font-family: 'BR Firma','Roboto', sans-serif;
    font-weight: 400;
    scroll-behavior: smooth;
  }

  *,*::before,*::after{
    box-sizing: inherit;
    margin: 0;
    padding: 0;
  }

  	body {
		font-weight: 400;
		min-height: 100vh;
		line-height: 1.5;
	}
`;
