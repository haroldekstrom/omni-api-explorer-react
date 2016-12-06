import React, { Component } from 'react';
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
        <input type="text" id="engine-ip-addr" defaultValue="10.4.2.70:8000"></input>
        <label htmlFor="engine-auth-token">API Token:</label>
        <input type="text" id="engine-auth-token" defaultValue="93db21ad6f87e76b3bb0e6c5306cef11eeb43798"></input>
      </div>
    );
  }
}

class EngineViewList extends Component {
  render() {
    return (
      <div className="engine-viewlist">
        <button type="button" id="button-status" data-section="status" className="engine-view-button">Status</button>
        <button type="button" id="button-captures" data-section="captures" className="engine-view-button">Captures</button>
        <button type="button" id="button-capture-sessions" data-section="capture-sessions" className="engine-view-button">Capture Sessions</button>
        <button type="button" id="button-files" data-section="files" className="engine-view-button">Files</button>
        <button type="button" id="button-forensic-searches" data-section="forensic-searches" className="engine-view-button">Forensic Searches</button>
        <button type="button" id="button-adapters" data-section="adapters" className="engine-view-button">Adapters</button>
        <button type="button" id="button-filters" data-section="filters" className="engine-view-button">Filters</button>
        <button type="button" id="button-graphs" data-section="graphs" className="engine-view-button">Graphs</button>
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

class App extends Component {
  render() {
    return (
      <div className="app">
        <Sidebar />
        <EngineView />
      </div>
    );
  }
}

export default App;
