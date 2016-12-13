import React, { Component } from 'react';
import 'whatwg-fetch';
import './EngineFiles.css';

class EngineFiles extends Component {
  constructor(props) {
    super(props);
    this.state = {engineFiles: ""};
  }

  refresh() {
    const engineHost = document.getElementById('engine-ip-addr').value;
    const engineAuthToken = document.getElementById('engine-auth-token').value;
    const url = 'http://' + engineHost + '/files/';
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
          _this.setState({engineFiles: text});
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
      <section className="engine-view engine-files">
        <h1>Files</h1>
        <pre>{this.state.engineFiles}</pre>
      </section>
    );
  }
}

export default EngineFiles;
