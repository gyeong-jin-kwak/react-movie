import { createGlobalStyle } from 'styled-components';
import reset from 'styled-reset';

const globalStyles = createGlobalStyle`
  ${reset};
  a {
    text-decoration: none;
    color: inherit;
  }

  * {
    box-sizing: border-box;
  }

  body {
    padding-top: 80px;
    font-family:-apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxgen, Ubuntu, Canta;
    font-size: 12px;
    color: #fff;
    background-color: rgba(20, 20, 20, 1);
  }
`;

export default globalStyles;