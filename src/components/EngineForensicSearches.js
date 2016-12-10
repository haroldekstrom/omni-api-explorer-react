import React, { Component } from 'react';
import 'whatwg-fetch';
import './EngineForensicSearches.css';

class EngineForensicSearches extends Component {
  constructor(props) {
    super(props);
    this.state = {engineForensicSearches: ""};
  }

  refresh() {
    const engineHost = document.getElementById('engine-ip-addr').value;
    const engineAuthToken = document.getElementById('engine-auth-token').value;
    const url = 'http://' + engineHost + '/forensic-searches/';
    const _this = this;
    fetch(url, {
      headers: {
        "Authorization": "Token " + engineAuthToken
      }
    })
    .then(function(response) {
      if (response.ok) {
        response.text().then(function(text) {
          _this.setState({engineForensicSearches: text});
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
        <h1>Forensic Searches</h1>
        <pre>{this.state.engineForensicSearches}</pre>
      </section>
    );
  }
}

export default EngineForensicSearches;
