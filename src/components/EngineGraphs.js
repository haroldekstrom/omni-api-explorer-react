import React, { Component } from 'react';
import 'whatwg-fetch';
import './EngineGraphs.css';

class EngineGraphs extends Component {
    constructor(props) {
        super(props);
        this.state = {engineGraphs: ""};
    }

    refresh() {
        const engineHost = document.getElementById('engine-ip-addr').value;
        const engineAuthToken = document.getElementById('engine-auth-token').value;
        const url = 'http://' + engineHost + '/graphs/';
        const _this = this;
        fetch(url, {
            headers: {
                "Authorization": "Token " + engineAuthToken
            }
        })
        .then(function(response) {
            if (response.ok) {
                response.text().then(function(text) {
                    _this.setState({engineGraphs: text});
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
            <section className="engine-view engine-graphs">
                <h1>Graphs</h1>
                <pre>{this.state.engineGraphs}</pre>
            </section>
        );
    }
}

export default EngineGraphs;
