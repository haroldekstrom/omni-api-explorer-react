import React, { Component } from 'react';
import ReactCSSTransitionGroup from 'react-addons-css-transition-group'
import 'whatwg-fetch';
import './EngineAlarms.css';

class EngineAlarms extends Component {
    constructor(props) {
        super(props);
        this.state = {engineAlarms: ""};
    }

    refresh() {
        const engineHost = document.getElementById('engine-ip-addr').value;
        const engineAuthToken = document.getElementById('engine-auth-token').value;
        const url = 'http://' + engineHost + '/alarms/';
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
                    _this.setState({engineAlarms: text});
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
                className="engine-view engine-alarms">
                <h1>Alarms</h1>
                <pre>{this.state.engineAlarms}</pre>
            </ReactCSSTransitionGroup>
        );
    }
}

export default EngineAlarms;
