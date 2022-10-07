import logo from './logo.svg';
import './App.css';
import React, { Component } from 'react';
import Button from '@material-ui/core/Button';
import '@fontsource/roboto/500.css';

 
function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Chris Did something. No Progress will be made for a while.
        </p>
        <Button   href="https://youtube.com/shorts/iavN1tmY62o?feature=share"
          target="_blank" rel="noopener noreferrer" variant="contained" color="primary">
        I am a Videographer. 
      </Button>
       
      </header>
    </div>
  );
}

export default App;
