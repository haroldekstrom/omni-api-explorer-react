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
            <section className="engine-view engine-captures">
                {/*<pre>{this.state.engineCaptures}</pre>*/}
                <nav className="section-nav">
                    <header><h1>Captures</h1></header>
                    <div className="nav-item"></div>
                </nav>
                <div className="section-content">
                    <ul className="nav nav-tabs" role="tablist">
                        <li role="presentation" className="active"><a href="#capture-nodes" aria-controls="nodes" role="tab" data-toggle="tab">Nodes</a></li>
                        <li role="presentation"><a href="#capture-protocols" aria-controls="protocols" role="tab" data-toggle="tab">Protocols</a></li>
                        <li role="presentation"><a href="#capture-applications" aria-controls="applications" role="tab" data-toggle="tab">Applications</a></li>
                        <li role="presentation"><a href="#capture-flows" aria-controls="flows" role="tab" data-toggle="tab">Flows</a></li>
                    </ul>
                    <div className="tab-content">
                        <div role="tabpanel" className="tab-pane active" id="capture-nodes"></div>
                        <div role="tabpanel" className="tab-pane" id="capture-protocols"></div>
                        <div role="tabpanel" className="tab-pane" id="capture-applications"></div>
                        <div role="tabpanel" className="tab-pane" id="capture-flows"></div>
                    </div>
                </div>
            </section>
        );
    }
}

export default EngineCaptures;
