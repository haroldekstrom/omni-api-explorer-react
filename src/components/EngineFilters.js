import React, { Component } from 'react';
import 'whatwg-fetch';
import './EngineFilters.css';

class EngineFilters extends Component {
  constructor(props) {
    super(props);
    this.state = {engineFilters: ""};
  }

  refresh() {
    const engineHost = document.getElementById('engine-ip-addr').value;
    const engineAuthToken = document.getElementById('engine-auth-token').value;
    const url = 'http://' + engineHost + '/filters/';
    const _this = this;
    fetch(url, {
      headers: {
        "Authorization": "Token " + engineAuthToken
      }
    })
    .then(function(response) {
      if (response.ok) {
        response.text().then(function(text) {
          _this.setState({engineFilters: text});
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
        <h1>Filters</h1>
        <pre>{this.state.engineFilters}</pre>
      </section>
    );
  }
}

export default EngineFilters;
