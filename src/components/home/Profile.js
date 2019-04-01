import React, { Component } from 'react';
import { Link } from 'react-router-dom';

class Profile extends Component {
  render() {
    return (
      <div id="hero">
        <h1>
          JavaScript developer
          <br /> based in Auckland, NZ.
        </h1>
        <p />

        <div className="intro">
          <p>
            A creative JavaScript developer with the intention to become the
            best there is. I've spent quite some time studying Mathematics and
            Computer Science at the university of Auckland, albeit I've spent
            more time applying that knowledge into the reality of building good
            web applications.
          </p>
        </div>
        <br />

        <div className="link-wrapper">
          <Link className="link" to="/story">
            My 'Portfolio'
          </Link>
        </div>

        <br />
        <div className="socials">
          <a href="https://twitter.com/suessflorian">
            <i className="fab fa-twitter" />
          </a>
          <a href="https://github.com/suessflorian">
            <i className="fab fa-github" />
          </a>
          <a href="https://linkedin.com/in/suessflorian">
            <i className="fab fa-linkedin" />
          </a>
        </div>
      </div>
    );
  }
}

export default Profile;
