import React, { Component } from 'react';
import 'whatwg-fetch';
import './EngineAdapters.css';

class EngineAdapters extends Component {
  constructor(props) {
    super(props);
    this.state = {engineAdapters: ""};
  }

  refresh() {
    const engineHost = document.getElementById('engine-ip-addr').value;
    const engineAuthToken = document.getElementById('engine-auth-token').value;
    const url = 'http://' + engineHost + '/adapters/';
    const _this = this;
    fetch(url, {
      headers: {
        "Authorization": "Token " + engineAuthToken
      }
    })
    .then(function(response) {
      if (response.ok) {
        response.text().then(function(text) {
          _this.setState({engineAdapters: text});
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
        <h1>Adapters</h1>
        <pre>{this.state.engineAdapters}</pre>
      </section>
    );
  }
}

export default EngineAdapters;
