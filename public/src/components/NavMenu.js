import React, { Component } from 'react';
import { Link } from 'react-router';

class NavMenu extends Component {

  render () {

    let {loggedIn} = this.props;
    return (
        <nav className="offset-xs-3 col-xs-6 navbar navbar-light bg-faded">
          <ul className="nav navbar-nav">
            <li className="nav-item active">
              <Link className="nav-link" href="#" to="/">
                {
                    loggedIn ? "Logout" : "Login"
                }
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" href="#" to="/data">Data</Link>
            </li>
          </ul>
        </nav>
    )
  }
}

export default NavMenu;