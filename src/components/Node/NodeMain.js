import React from 'react';

export default class NodeMain extends React.Component {
  render() {
    return (
      <div>
        <h1>Node.js 공부</h1>
        { this.props.children }
      </div>
    );
  }
}
