import React from 'react';
import { Link } from 'react-router';

export default class ReduxMain extends React.Component {
  render() {
    return (
      <div>
        <h1>Redux</h1>
        <ul>
          <li><Link to = 'redux/counter'>counter</Link></li>
        </ul>
      </div>
    );
  }
}
