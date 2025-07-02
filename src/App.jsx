import React from "react";
import Api from "./Component/Api";
import { CssBaseline, Container } from "@mui/material";
import Header from "./Component/Header";
import { ThemeProvider, StyledEngineProvider, createTheme } from "@mui/material/styles";

import makeStyles from '@mui/styles/makeStyles';

const theme = createTheme();

function App() {
  return (
    <div className="App">
      <StyledEngineProvider injectFirst>
        <ThemeProvider theme={theme}>
          <CssBaseline>
            <Header />
            <Container>
              <Api />
            </Container>
          </CssBaseline>
        </ThemeProvider>
      </StyledEngineProvider>
    </div>
  );
}

export default App;
