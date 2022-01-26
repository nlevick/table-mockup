import { createGlobalStyle } from "styled-components";

import { css } from "styled-components";
import C from "./theme";

const globalStyles = css`
  html,
  body,
  #app {
    height: 100%;
    width: 100%;
    box-sizing: border-box;
    padding: 0;
    margin: 0;
    font-size: ${C.fontSize};
    background: ${C.defaultBGColor};
    font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", "Roboto",
      "Oxygen", "Ubuntu", "Cantarell", "Fira Sans", "Droid Sans",
      "Helvetica Neue", sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
  }

  *:focus {
    outline: none !important;
  }
`;

export default createGlobalStyle`
    ${globalStyles}
`;
