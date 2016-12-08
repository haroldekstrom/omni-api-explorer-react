import React, { Component } from 'react';
import { render } from 'react-dom';
import { Router, Route, hashHistory, Link } from 'react-router';
import FontAwesome from 'react-fontawesome'
import './App.css';

class Header extends Component {
  render() {
    return (
      <header>
        <h1 className="header-title"><FontAwesome name="search" flip="horizontal" />mni <strong>API Explorer</strong></h1>
      </header>
    );
  }
}

class EngineInfo extends Component {
  render() {
    return (
      <div className="engine-info">
        <label htmlFor="engine-ip-addr">Host:</label>
        <input type="text" id="engine-ip-addr" defaultValue="192.168.10.32:8000"></input>
        <label htmlFor="engine-auth-token">API Token:</label>
        <input type="text" id="engine-auth-token" defaultValue=""></input>
      </div>
    );
  }
}

class EngineViewList extends Component {
  render() {
    return (
      <div className="engine-viewlist">
        <Link to="/status/" className="engine-view-button" activeClassName="is-selected">Status</Link>
        <Link to="/captures/" className="engine-view-button" activeClassName="is-selected">Captures</Link>
      </div>
    );
  }
}

class EngineView extends Component {
  render() {
    return (
      <div className="engine-view"></div>
    );
  }
}

class Sidebar extends Component {
  render() {
    return (
      <div className="sidebar">
        <Header />
        <EngineInfo />
        <EngineViewList />
      </div>
    );
  }
}

class EngineStatus extends Component {
  render() {
    return (
      <div className="engine-view">Engine Status</div>
    );
  }
}

class EngineCaptures extends Component {
  render() {
    return (
      <div className="engine-view">Engine Captures</div>
    );
  }
}

class App extends Component {
  render() {
    return (
      <div className="app">
        <Sidebar />
        {this.props.children}
      </div>
    );
  }
}

render((
  <Router history={hashHistory}>
    <Route path="/" component={App}>
      <Route path="/status" component={EngineStatus} />
      <Route path="/captures" component={EngineCaptures} />
    </Route>
  </Router>), document.getElementById("root"));

export default App;
