import React from 'react';
import { render } from 'react-dom';
import { Router, Route, hashHistory } from 'react-router';

import App from './components/App';
import EngineStatus from './components/EngineStatus';
import EngineCaptures from './components/EngineCaptures';

import 'bootstrap/dist/css/bootstrap.css';
import 'font-awesome/css/font-awesome.css';
import './index.css';

render((
  <Router history={hashHistory}>
    <Route path="/" component={App}>
      <Route path="/status" component={EngineStatus} />
      <Route path="/captures" component={EngineCaptures} />
    </Route>
  </Router>), document.getElementById("root"));
