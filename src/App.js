import logo from './logo.svg';
import './App.css';
import React, { Component } from 'react';
import Button from '@material-ui/core/Button';
import '@fontsource/roboto/500.css';
import { Stack, MenuItem } from '@mui/material';  
import { createTheme, responsiveFontSizes, ThemeProvider } from '@mui/material/styles';

let theme = createTheme({
  palette: {
    primary: {
      main: '#0052cc',
    },
    secondary: {
      main: '#edf2ff',
    },
  },
});

theme = createTheme(theme, {
  palette: {
    info: {
      main: theme.palette.secondary.main,
    },
  },
});


theme = responsiveFontSizes(theme);

function App() {
  return (
    <React.StrictMode> 
    <ThemeProvider theme={theme}>
    <div>
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Chris Did something. No Progress will be made for a while.
        </p>
        <Stack direction="column"
  justifyContent="space-evenly"
  alignItems="center"
  spacing={0.5}>
          <MenuItem >Help Provide Water to USA</MenuItem >
          <MenuItem >Help Protect the Environment</MenuItem >
          <MenuItem >Have a Dog</MenuItem >
        </Stack>

        <Button   href="https://youtube.com/shorts/iavN1tmY62o?feature=share"
          target="_blank" rel="noopener noreferrer" variant="contained" color="primary">
        Subscribe Now
      </Button>
       
      </header>
    </div>
    </ThemeProvider>
    </React.StrictMode>
  );
}

export default App;
