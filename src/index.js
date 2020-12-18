import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router } from 'react-router-dom';

import App from './App';

import './index.scss';

ReactDOM.render(
  <Router forceRefresh={true}>
    <App />
  </Router>,
  document.getElementById('root')
);
