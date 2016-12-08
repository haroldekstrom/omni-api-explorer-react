import React, { Component } from 'react';
import { Link } from 'react-router';

class EngineNav extends Component {
  render() {
    return (
      <div className="engine-viewlist">
        <Link to="/status/" className="engine-view-button" activeClassName="is-selected">Status</Link>
        <Link to="/captures/" className="engine-view-button" activeClassName="is-selected">Captures</Link>
      </div>
    );
  }
}

export default EngineNav;
