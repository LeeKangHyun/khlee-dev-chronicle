import React from 'react';
import {Link} from 'react-router';

class JsMain extends React.Component {
  render() {
    return (
      <div>
        <h1>JavaScript 공부</h1>
        { this.props.children }
      </div>
    );
  }
}

export default JsMain;
