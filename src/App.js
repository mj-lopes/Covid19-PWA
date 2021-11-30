import { CssBaseline } from "@material-ui/core";
import { StylesProvider } from "@material-ui/styles";
import React from "react";
import GlobalStyle from "./commons/styles/global-style";
import Main from "./pages/Main";

function App() {
  return (
    <StylesProvider injectFirst>
      <CssBaseline />
      <GlobalStyle />
      <div>
        <Main />
      </div>
    </StylesProvider>
  );
}

export default App;
