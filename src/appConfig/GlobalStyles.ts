import { createGlobalStyle } from 'styled-components';

export const GlobalStyles = createGlobalStyle`
  html, body, #root {
    height: 100%;
    margin: 0;
    padding: 0;
    font-family: 'Roboto', sans-serif;
  }

  body {
    #root > div {
      height: 100%;
      display: grid;
  
      grid-template-rows: 100px 1fr 200px;
    }
  }

  #header {
    grid-row-start: 1;
  }

  #main {
    grid-row-start: 2;
  }

  #footer {
    grid-row-start: 3;
  }
`;