import React from 'react';
import './App.css';
import Api from './Component/Api';
import { CssBaseline, Container } from '@material-ui/core';


function App() {
  return (
    <div className="App">
      <CssBaseline>
        <Container>
          <Api />
        </Container>
      </CssBaseline>
    </div>
  );
}

export default App;
