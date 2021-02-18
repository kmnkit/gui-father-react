import {
    createGlobalStyle,
    GlobalStyleComponent,
    DefaultTheme
  } from 'styled-components';
  import reset from 'styled-reset';
  
  const GlobalStyles: GlobalStyleComponent<
    unknown,
    DefaultTheme
  > = createGlobalStyle`
    ${reset};
    a {
      text-decoration: none;
      color: inherit;
    }
    * {
      box-sizing: border-box;
    }
    body {
      font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
      font-family: 'Long Cang', cursive;
      font-size: 12px;
      background-color: rgba(252, 243, 207, 1);
      color: white;
      padding-top: 50px;
    }
  `;
  
  export default GlobalStyles;