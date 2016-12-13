import React, { Component } from 'react';
import 'whatwg-fetch';
import './EngineStatus.css';

class EngineStatus extends Component {
    constructor(props) {
        super(props);
        this.state = {engineStatus: {}};
    }

    refresh() {
        const engineHost = document.getElementById('engine-ip-addr').value;
        const engineAuthToken = document.getElementById('engine-auth-token').value;
        const url = 'http://' + engineHost + '/status/';
        const _this = this;
        fetch(url, {
            headers: {
                "Authorization": "Token " + engineAuthToken,
                "Accept": "application/json"
            }
        })
        .then(function(response) {
            if (response.ok) {
                response.json().then(function(json) {
                    _this.setState({engineStatus: json});
                });
            }
        })
        .catch(function(error) {
            console.log(error);
        });
    }

    componentDidMount() {
        this.refresh();
    }

    render() {
        const props = this.state.engineStatus;
        return (
            <section className="engine-view engine-status">
                <h1>Status</h1>
                {/*<pre>{JSON.stringify(this.state.engineStatus, null, 2)}</pre>*/}
                <table className="prop-table">
                    <tbody>
                        <tr><th>Name</th><td>{props.Name}</td></tr>
                        <tr><th>Address</th><td>{props.Host}:{props.Port}</td></tr>
                        <tr><th>User</th><td>{props.User}</td></tr>
                        <tr><th>Engine Type</th><td>{props.engine_type}</td></tr>
                        <tr><th>Version</th><td>{props.ProductVersion}</td></tr>
                        <tr><th>Engine Local Time</th><td>{props.Time}</td></tr>
                        <tr><th>Time Zone</th><td>{props.TimeZoneBias}</td></tr>
                        <tr><th>Uptime</th><td>{props.Uptime}</td></tr>
                        <tr><th>Operating System</th><td>{props.OS}</td></tr>
                        <tr><th>CPU Type</th><td>{props.CpuType}</td></tr>
                        <tr><th>CPU Count</th><td>{props.CpuCount}</td></tr>
                        <tr><th>Data Folder</th><td>{props.DataFolder}</td></tr>
                    </tbody>
                </table>
            </section>
        );
    }
}

export default EngineStatus;
