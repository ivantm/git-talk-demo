import React, { Component } from 'react';
import { Link } from 'react-router-dom';

export default class Navbar extends Component {
  render() {
    return (
      <header className="container">
        <nav id="navbar">
          <div className="content">
            <div className="main">
              <h1>
                <Link className="title" to="/">
                  <span className="capital">F</span>lorian Suess
                </Link>{' '}
                <span className="position">
                  {' '}
                  <span className="line">|</span> Software Developer
                </span>
              </h1>
            </div>
            <div className="socials">
              <h1>
                <a href="https://twitter.com/suessflorian">
                  <i className="social-icon fab fa-twitter" />
                </a>
                <a href="https://github.com/suessflorian">
                  <i className="social-icon fab fa-github" />
                </a>
                <a href="https://linkedin.com/in/suessflorian">
                  <i className="social-icon fab fa-linkedin" />
                </a>
              </h1>
            </div>
          </div>
        </nav>
      </header>
    );
  }
}
