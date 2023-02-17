import { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`
  * {
    margin: 0px;
    padding: 0px;
    box-sizing: border-box;
  }
  body {
    
    width: 100vw;
    height: 100vh;
    font-family: OCR A Std, monospace

  }
`;

export default GlobalStyle;