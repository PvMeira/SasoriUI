import { MuiThemeProvider } from "@material-ui/core";
import React from "react";

import { BrowserRouter } from "react-router-dom";
import theme from "./configuration/style";
import ApiRoute from "./configuration/route";
import MenuBar from "./components/menu";

function App() {
  return (
    <MuiThemeProvider theme={theme}>
      <BrowserRouter>
        <MenuBar />
        <ApiRoute />
      </BrowserRouter>
    </MuiThemeProvider>
  );
}

export default App;
