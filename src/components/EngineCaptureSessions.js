import React, { Component } from 'react';
import ReactCSSTransitionGroup from 'react-addons-css-transition-group'
import 'whatwg-fetch';
import ReactHighcharts from 'react-highcharts'
import './EngineCaptureSessions.css';

const topChartConfig = {
  chart: {
    type: "bar",
    height: 220
  },
  title: {
    text: "Top Talkers by IP Address"
  },
  legend: {
    enabled: false
  },
  yAxis: {
    title: {
      text: null
    }
  },
  series: [
    {
      color: "#de6a10",
      data: [310, 295, 290, 240, 220, 210, 195, 180, 170, 150, 140, 125, 110, 100, 90, 80, 55]
    }
  ]
}

const timelineChartConfig = {
  chart: {
    height: 220
  },
  title: {
    text: null
  },
  legend: {
    enabled: false
  },
  yAxis: {
    title: {
      text: "Mbits/s"
    }
  },
  series: [
    {
      data: [310, 295, 290, 240, 220, 210, 195, 180, 170, 150, 140, 125, 110, 100, 90, 80, 55]
    }
  ]
}

class EngineCaptureSessions extends Component {
    constructor(props) {
        super(props);
        this.state = {engineCaptureSessions: {"cols": [], "rows": []}};
    }

    refresh() {
        const engineHost = document.getElementById('engine-ip-addr').value;
        const engineAuthToken = document.getElementById('engine-auth-token').value;
        const url = 'http://' + engineHost + '/capture-sessions/';
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
                    _this.setState({engineCaptureSessions: json});
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
            <ReactCSSTransitionGroup
                transitionName="section"
                transitionAppear={true}
                transitionAppearTimeout={500}
                transitionEnter={false}
                transitionLeave={false}
                component="section"
                className="engine-view engine-capture-sessions">
                {/*<pre>{JSON.stringify(this.state.engineCaptureSessions, null, 2)}</pre>*/}
                <nav className="section-nav">
                    <header><h1>Capture Sessions</h1></header>
                    {
                        this.state.engineCaptureSessions.rows.map(function(row) {
                            return (<button type="button" key={row.SessionID} data-session-id={row.SessionID}>{row.Name}</button>);
                        })
                    }
                </nav>
                <div className="section-content">
                    <div className="capture-session-header">
                        <table className="prop-table">
                            <tbody>
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
                                    <th>Packets dropped:</th>
                                    <td></td>
                                    <th>Sample interval:</th>
                                    <td>1 Sec. Avg.</td>
                                </tr>
                            </tbody>
                        </table>
                    </div>

                    <div className="capture-session-top-stats">
                        <div className="top-stats">
                            <div>
                                <ReactHighcharts config={topChartConfig} />
                            </div>
                        </div>
                        <div className="top-stats">
                            <div>
                                <ReactHighcharts config={topChartConfig} />
                            </div>
                        </div>
                    </div>

                    <div className="capture-session-timeline-stats">
                        <div className="capture-sessions-timeline-graph">
                            <ReactHighcharts config={timelineChartConfig} />
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
            </ReactCSSTransitionGroup>
        );
    }
}

export default EngineCaptureSessions;
