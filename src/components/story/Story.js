import React, { Component } from 'react';

import Temp from './Temp';
import Copyright from '../common/Copyright';

export default class Story extends Component {
  render() {
    return (
      <div id="my-story" className="container">
        <div className="animation-wrapper">
          <h1>Working on this right now.</h1>
          <p>
            Here is where one day I'll be showcasing my little lineup of
            projects. However this isn't built yet. If you'd like to know more
            about me please checkout my GitHub and/or LinkedIn page. I'm in the
            search for a position, so please, don't be afraid to reach out.
          </p>
          <Temp />

          <Copyright />
        </div>
      </div>
    );
  }
}
