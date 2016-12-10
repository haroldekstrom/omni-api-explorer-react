import React from 'react';
import { render } from 'react-dom';
import { Router, Route, browserHistory } from 'react-router';

import App from './components/App';
import EngineStatus from './components/EngineStatus';
import EngineCaptures from './components/EngineCaptures';
import EngineCaptureSessions from './components/EngineCaptureSessions';
import EngineFiles from './components/EngineFiles';
import EngineForensicSearches from './components/EngineForensicSearches';
import EngineAdapters from './components/EngineAdapters';
import EngineFilters from './components/EngineFilters';
import EngineGraphs from './components/EngineGraphs';
import EngineNotifications from './components/EngineNotifications';

import 'bootstrap/dist/css/bootstrap.css';
import 'font-awesome/css/font-awesome.css';
import './index.css';

render((
  <Router history={browserHistory}>
    <Route path="/" component={App}>
      <Route path="/status/" component={EngineStatus} />
      <Route path="/captures/" component={EngineCaptures} />
      <Route path="/capture-sessions/" component={EngineCaptureSessions} />
      <Route path="/files/" component={EngineFiles} />
      <Route path="/forensic-searches/" component={EngineForensicSearches} />
      <Route path="/adapters/" component={EngineAdapters} />
      <Route path="/filters/" component={EngineFilters} />
      <Route path="/graphs/" component={EngineGraphs} />
      <Route path="/notifications/" component={EngineNotifications} />
    </Route>
  </Router>), document.getElementById("root"));
