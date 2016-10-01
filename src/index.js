import React from 'react';
import ReactDOM from 'react-dom';
import { Router, Route, browserHistory } from 'react-router'

import App from './App';

import './styles/index.css';

ReactDOM.render(
  <Router history={browserHistory}>
    <Route path="/daylight/" component={App} />
  </Router>
  , document.getElementById('root')
);
