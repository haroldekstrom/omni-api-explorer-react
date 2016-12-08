import React, { Component } from 'react';
import Sidebar from './Sidebar';
import './App.css';

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

export default App;
