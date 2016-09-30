import React from 'react';
import { Link } from 'react-router';

require('../../stylesheets/components/Redux/ReduxMain.scss');

export default class ReduxMain extends React.Component {
  render() {
    let path = location.pathname;
    return (
      <div>
        {/* <h1>Redux</h1> */}
        {path === '/redux' && <ul>
          <li><Link to = '/counter'>counter</Link></li>
        </ul>}
        {this.props.children}
      </div>
    );
  }
}
