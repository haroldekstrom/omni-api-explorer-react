import React, { Component } from 'react';
import 'whatwg-fetch';
import './EngineEvents.css';

class EngineEvents extends Component {
  constructor(props) {
    super(props);
    this.state = {engineEvents: ""};
  }

  refresh() {
    const engineHost = document.getElementById('engine-ip-addr').value;
    const engineAuthToken = document.getElementById('engine-auth-token').value;
    const url = 'http://' + engineHost + '/events/';
    const _this = this;
    fetch(url, {
      headers: {
        "Authorization": "Token " + engineAuthToken,
        "Accept": "application/xml"
      }
    })
    .then(function(response) {
      if (response.ok) {
        response.text().then(function(text) {
          _this.setState({engineEvents: text});
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
      <section className="engine-view engine-events">
        <h1>Events</h1>
        <pre>{this.state.engineEvents}</pre>
      </section>
    );
  }
}

export default EngineEvents;
