import React, { Component } from 'react';
import FontAwesome from 'react-fontawesome'
import './Header.css';

class Header extends Component {
  render() {
    return (
      <header>
        <h1 className="header-title"><FontAwesome name="search" flip="horizontal" />mni <strong>API Explorer</strong></h1>
      </header>
    );
  }
}

export default Header;
