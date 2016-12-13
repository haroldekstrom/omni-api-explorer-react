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
        "Authorization": "Token " + engineAuthToken,
        "Accept": "application/xml"
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
      <section className="engine-view engine-capture-sessions">
        {/*<pre>{this.state.engineCaptureSessions}</pre>*/}
        <nav className="section-nav">
            <header><h1>Capture Sessions</h1></header>
            <div className="nav-item"></div>
        </nav>
        <div className="section-content">
            <div className="capture-session-header">
                <table className="prop-table">
                    <tr>
                        <th>Data start time:</th>
                        <td>9/24/2014 10:59:58.545139100</td>
                        <th>Media:</th>
                        <td>Ethernet</td>
                        <th>Adapter:</th>
                        <td>Onboard Ethernet</td>
                    </tr>
                    <tr>
                        <th>Data end time:</th>
                        <td>9/24/2014 11:10:41.722926700</td>
                        <th>Link speed:</th>
                        <td>1,000 Mbits/s</td>
                        <th>Owner:</th>
                        <td>root</td>
                    </tr>
                    <tr>
                        <th>Duration:</th>
                        <td>0:10:43.177787600</td>
                        <th>Packets:</th>
                        <td>12,211</td>
                        <th>Time window:</th>
                        <td></td>
                    </tr>
                    <tr>
                        <th>Status:</th>
                        <td>Completed</td>
                        <th>Packet dropped:</th>
                        <td></td>
                        <th>Sample interval:</th>
                        <td>1 Sec. Avg.</td>
                    </tr>
                </table>
            </div>

            <div className="capture-session-top-stats">
                <div className="top-stats">
                </div>
                <div className="top-stats">
                    <h3>Top Protocols by Bytes</h3>
                </div>
            </div>

            <div className="capture-session-timeline-stats">
                <div className="capture-sessions-timeline-graph">
                </div>
            </div>

            <div className="capture-session-list">
                <ul className="nav nav-tabs" role="tablist">
                    <li role="presentation" className="active"><a href="#capture-sessions-timeline" aria-controls="capture-sessions-timeline" role="tab" data-toggle="tab">Timeline</a></li>
                    <li role="presentation"><a href="#capture-sessions-storage" aria-controls="capture-sessions-storage" role="tab" data-toggle="tab">Storage</a></li>
                    <li role="presentation"><a href="#capture-sessions-details" aria-controls="capture-sessions-details" role="tab" data-toggle="tab">Details</a></li>
                </ul>
                <div className="tab-content">
                    <div role="tabpanel" className="tab-pane active" id="capture-sessions-timeline">Timeline</div>
                    <div role="tabpanel" className="tab-pane" id="capture-sessions-storage">Storage</div>
                    <div role="tabpanel" className="tab-pane" id="capture-sessions-details">Details</div>
                </div>
            </div>
        </div>
      </section>
    );
  }
}

export default EngineCaptureSessions;
