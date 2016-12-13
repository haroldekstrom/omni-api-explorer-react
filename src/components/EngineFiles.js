import React, { Component } from 'react';
import ReactCSSTransitionGroup from 'react-addons-css-transition-group'
import 'whatwg-fetch';
import './EngineFiles.css';

class EngineFiles extends Component {
    constructor(props) {
        super(props);
        this.state = {engineFiles: {}};
    }

    refresh() {
        const engineHost = document.getElementById('engine-ip-addr').value;
        const engineAuthToken = document.getElementById('engine-auth-token').value;
        const url = 'http://' + engineHost + '/files/';
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
                    _this.setState({engineFiles: json});
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
                className="engine-view engine-files">
                <h1>Files</h1>
                <pre>{JSON.stringify(this.state.engineFiles, null, 2)}</pre>
            </ReactCSSTransitionGroup>
        );
    }
}

export default EngineFiles;
