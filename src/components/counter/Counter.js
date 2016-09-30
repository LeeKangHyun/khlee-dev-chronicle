import React from 'react';
import { connect } from 'react-redux';

import Button from './Buttons';
import Option from './Option';

class Counter extends React.Component {
  render() {
    return (
      <div>
        <h1>허접한 계산기</h1>
        <h2>VALUE: {this.props.value}</h2>
        <Button />
        <Option />
      </div>
    );
  }
}

let mapStateToProps = (state) => {
  return {
    value: state.counter.value
  };
};

export default connect(mapStateToProps)(Counter);
