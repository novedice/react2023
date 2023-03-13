import React from 'react';
import { Link } from 'react-router-dom';
import './header.css';

class Header extends React.Component {
  render() {
    return (
      <>
        <div className="header-wrap">
          <Link to="/">
            <div>main</div>
          </Link>
          <Link to="/about">
            <div>about us</div>
          </Link>
        </div>
      </>
    );
  }
}

export default Header;
