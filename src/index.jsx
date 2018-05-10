import React from 'react';
import { render as r } from 'react-dom';
import { BrowserRouter } from 'react-router-dom';
import App from './App';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';


r(
<BrowserRouter><MuiThemeProvider><App /></MuiThemeProvider></BrowserRouter>,
document.querySelector('.cont'),
);