import React, { Component } from 'react';
import './EngineInfo.css';

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

export default EngineInfo;
