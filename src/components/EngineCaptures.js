import React, { Component } from 'react';
import 'whatwg-fetch';
import './EngineCaptures.css';

class EngineCaptures extends Component {
  constructor(props) {
    super(props);
    this.state = {engineCaptures: ""};
  }

  refresh() {
    const engineHost = document.getElementById('engine-ip-addr').value;
    const engineAuthToken = document.getElementById('engine-auth-token').value;
    const url = 'http://' + engineHost + '/captures/';
    const _this = this;
    fetch(url, {
      headers: {
        "Authorization": "Token " + engineAuthToken
      }
    })
    .then(function(response) {
      if (response.ok) {
        response.text().then(function(text) {
          _this.setState({engineCaptures: text});
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
        <h1>Captures</h1>
        <pre>{this.state.engineCaptures}</pre>
      </section>
    );
  }
}

export default EngineCaptures;
