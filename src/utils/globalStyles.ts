import { createGlobalStyle } from "styled-components";

export const GlobalStyles = createGlobalStyle`
  html{
    box-sizing: border-box;
    font-family: 'Roboto', sans-serif;
    font-weight: 400;
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
