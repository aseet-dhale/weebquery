import React from 'react';
import './App.css';
import Api from './Component/Api';
import { CssBaseline, Container } from '@material-ui/core';
import Header from './Component/Header';


function App() {
  return (
    <div className="App">
      <CssBaseline>
        <Header />
        <Container>
          <Api />
        </Container>
      </CssBaseline>
    </div>
  );
}

export default App;
