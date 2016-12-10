import React, { Component } from 'react';
import 'whatwg-fetch';
import './EngineNotifications.css';

class EngineNotifications extends Component {
  constructor(props) {
    super(props);
    this.state = {engineNotifications: {}};
  }

  refresh() {
    const engineHost = document.getElementById('engine-ip-addr').value;
    const engineAuthToken = document.getElementById('engine-auth-token').value;
    const url = 'http://' + engineHost + '/notifications/';
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
          _this.setState({engineNotifications: json});
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
        <h1>Notifications</h1>
        <pre>{JSON.stringify(this.state.engineNotifications, null, 2)}</pre>
      </section>
    );
  }
}

export default EngineNotifications;
