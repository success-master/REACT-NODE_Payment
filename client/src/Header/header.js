import React from 'react';
import './header.css';
import {NavLink} from 'react-router-dom';

export class Header extends React.Component {
  constructor(props) {
    super();
  }

  render() {
    // Requires logo
    return (
      <header>
        <div className="container">
          <div className="link-section">
            <ul>
              <NavLink to="/preview">
                <li>Preview</li>
              </NavLink>

              <a href="mailto:hi@milkicons.com">
                <li>Contact</li>
              </a>

              <a href="/documents/license.pdf"
                 target="_blank">
                <li>License</li>
              </a>
            </ul>
          </div>

          <NavLink to="/">
            <img className="logo"
                 src="/svg/milk_logo.svg"/>
          </NavLink>

        </div>
      </header>
    );
  }
}
