import React, { Component } from 'react';
import Header from './Header';
import EngineInfo from './EngineInfo';
import EngineNav from './EngineNav';
import './Sidebar.css';

class Sidebar extends Component {
  render() {
    return (
      <div className="sidebar">
        <Header />
        <EngineInfo />
        <EngineNav />
      </div>
    );
  }
}

export default Sidebar;
