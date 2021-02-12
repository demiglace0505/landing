import React from 'react';
import ReactDOM from 'react-dom';
import GlobalStyle from './base/GlobalStyle.js'

import App from './App';


ReactDOM.render(
  <React.Fragment>
    <GlobalStyle />
    <App />
  </React.Fragment>,
  document.getElementById('root')
);

