import React, { Component } from 'react';
import { Link } from 'react-router';
import './EngineNav.css';

class EngineNav extends Component {
    render() {
        return (
            <div className="engine-viewlist">
                <Link to="/status/" className="engine-view-button" activeClassName="is-selected">Status</Link>
                <Link to="/captures/" className="engine-view-button" activeClassName="is-selected">Captures</Link>
                <Link to="/capture-sessions/" className="engine-view-button" activeClassName="is-selected">Capture Sessions</Link>
                <Link to="/files/" className="engine-view-button" activeClassName="is-selected">Files</Link>
                <Link to="/forensic-searches/" className="engine-view-button" activeClassName="is-selected">Forensic Searches</Link>
                <Link to="/events/" className="engine-view-button" activeClassName="is-selected">Events</Link>
                <Link to="/adapters/" className="engine-view-button" activeClassName="is-selected">Adapters</Link>
                <Link to="/filters/" className="engine-view-button" activeClassName="is-selected">Filters</Link>
                <Link to="/graphs/" className="engine-view-button" activeClassName="is-selected">Graphs</Link>
                <Link to="/alarms/" className="engine-view-button" activeClassName="is-selected">Alarms</Link>
                <Link to="/notifications/" className="engine-view-button" activeClassName="is-selected">Notifications</Link>
            </div>
        );
    }
}

export default EngineNav;
