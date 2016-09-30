import React from 'react';
import { Link } from 'react-router';

require('../../stylesheets/components/Redux/ReduxMain.scss');

export default class ReduxMain extends React.Component {
  render() {
    return (
      <div>
        {/* <h1>Redux</h1> */}
        <ul>
          <li><Link to = '/counter'>counter</Link></li>
        </ul>
        {this.props.children}
      </div>
    );
  }
}
