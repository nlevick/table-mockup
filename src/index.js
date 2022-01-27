import React from "react";
import ReactDOM from "react-dom";
import { ThemeProvider } from "styled-components";

import App from "./component/App";
import theme from "./style/theme";
import GlobalStyle from "./style";

ReactDOM.render(
  <React.StrictMode>
    <ThemeProvider theme={theme}>
      <GlobalStyle />
      <App />
    </ThemeProvider>
  </React.StrictMode>,
  document.getElementById("root")
);
