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
    return (
      <section className="engine-view">
        <h1 >Engine Status</h1>
        <pre>{JSON.stringify(this.state.engineStatus, null, 4)}</pre>
      </section>
    );
  }
}

export default EngineStatus;
