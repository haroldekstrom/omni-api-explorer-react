import React, { Component } from 'react';
import './EngineInfo.css';

class EngineInfo extends Component {
    constructor(props) {
        super(props);
        this.state = {engineHost: "192.168.10.12", engineAuthToken: ""};
    }

    render() {
        return (
            <fieldset className="engine-info">
                <label htmlFor="engine-ip-addr">Host:</label>
                <input type="text" id="engine-ip-addr" defaultValue={this.state.engineHost}></input>
                <label htmlFor="engine-auth-token">API Token:</label>
                <input type="text" id="engine-auth-token" defaultValue={this.state.engineAuthToken}></input>
            </fieldset>
        );
    }
}

export default EngineInfo;
