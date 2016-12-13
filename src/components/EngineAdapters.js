import React, { Component } from 'react';
import 'whatwg-fetch';
import { getMediaString } from './../utils'
import './EngineAdapters.css';

function EngineAdaptersListItem(props) {
    return (
        <div className="adapter-item">
            <h2>{props.children.description}</h2>
            <table className="prop-table">
                <tbody>
                    <tr><th>Media</th><td>{getMediaString(props.children.mediaType, props.children.mediaSubType)}</td></tr>
                    <tr><th>Link Speed</th><td>{props.children.linkSpeed}</td></tr>
                    <tr><th>Address</th><td>{props.children.address}</td></tr>
                </tbody>
            </table>
        </div>
    );
}

function EngineAdaptersList(props) {
    return (
        <div className="adapters">
            {props.props.map(function(prop, index) {
                return (<EngineAdaptersListItem key={index}>{prop}</EngineAdaptersListItem>);
            })}
        </div>
    );
}

class EngineAdapters extends Component {
    constructor(props) {
        super(props);
        this.state = {engineAdapters: []};
    }

    convertXML(xmlText) {
        const adapterInfoList = [];
        const xmlParser = new DOMParser();
        const xmlDoc = xmlParser.parseFromString(xmlText, "application/xml");
        const adapterInfoObjElemList = xmlDoc.getElementsByTagName("adapterinfoobj");
        for (let i = 0; i < adapterInfoObjElemList.length; i++) {
            const adapterInfo = {};
            let objChildNode = adapterInfoObjElemList[i].firstChild;
            while (objChildNode !== null) {
                if (objChildNode.nodeType === 1) {
                    let itemChildNode = objChildNode.firstChild;
                    while (itemChildNode !== null) {
                        if (itemChildNode.nodeType === 1) {
                            if (itemChildNode.tagName === "ID" || 
                                    itemChildNode.tagName === "enumerator") {
                                adapterInfo["id"] = itemChildNode.innerHTML;
                            }
                            else if (itemChildNode.tagName === "Description" ||
                                    itemChildNode.tagName === "description") {
                                adapterInfo["description"] = itemChildNode.innerHTML;
                            }
                            else if (itemChildNode.tagName === "Flags") {
                                adapterInfo["flags"] = parseInt(itemChildNode.innerHTML, 10);
                            }
                            else if (itemChildNode.tagName === "LinkSpeed" || 
                                    itemChildNode.tagName === "linkspeed") {
                                adapterInfo["linkSpeed"] = parseInt(itemChildNode.innerHTML, 10);
                            }
                            else if (itemChildNode.tagName === "MediaType" ||
                                    itemChildNode.tagName === "ndismediatype") {
                                adapterInfo["mediaType"] = parseInt(itemChildNode.innerHTML, 10);
                            }
                            else if (itemChildNode.tagName === "MediaSubType" ||
                                    itemChildNode.tagName === "ndisphysmedium") {
                                adapterInfo["mediaSubType"] = parseInt(itemChildNode.innerHTML, 10);
                            }
                            else if (itemChildNode.tagName === "Address" ||
                                    itemChildNode.tagName === "address") {
                                adapterInfo["address"] = itemChildNode.innerHTML;
                            }
                            else if (itemChildNode.tagName === "Channels" ||
                                    itemChildNode.tagName === "channels") {
                                adapterInfo["channels"] = {};
                            }
                        }
                        itemChildNode = itemChildNode.nextSibling;
                    }
                }
                objChildNode = objChildNode.nextSibling;
            }
            adapterInfoList.push(adapterInfo);
        }
        return adapterInfoList;
    }

    refresh() {
        const engineHost = document.getElementById('engine-ip-addr').value;
        const engineAuthToken = document.getElementById('engine-auth-token').value;
        const url = 'http://' + engineHost + '/adapters/';
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
                    var adapterInfoList = _this.convertXML(text);
                    _this.setState({engineAdapters: adapterInfoList});
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
        if (this.state.engineAdapters.length > 0) {
            return (
                <section className="engine-view engine-adapters">
                    <h1>Adapters</h1>
                    <EngineAdaptersList props={this.state.engineAdapters} />
                </section>
            );
        } else {
            return <div></div>;
        }
    }
}

export default EngineAdapters;
