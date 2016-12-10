import React, { Component } from 'react';
import 'whatwg-fetch';
import './EngineCaptureSessions.css';

class EngineCaptureSessions extends Component {
  constructor(props) {
    super(props);
    this.state = {engineCaptureSessions: ""};
  }

  refresh() {
    const engineHost = document.getElementById('engine-ip-addr').value;
    const engineAuthToken = document.getElementById('engine-auth-token').value;
    const url = 'http://' + engineHost + '/capture-sessions/';
    const _this = this;
    fetch(url, {
      headers: {
        "Authorization": "Token " + engineAuthToken
      }
    })
    .then(function(response) {
      if (response.ok) {
        response.text().then(function(text) {
          _this.setState({engineCaptureSessions: text});
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
        <h1>Capture Sessions</h1>
        <pre>{this.state.engineCaptureSessions}</pre>
      </section>
    );
  }
}

export default EngineCaptureSessions;
