import React from 'react';
import { connect } from 'react-redux';
import { increment, decrement, multiple, division, zeroDiff } from '../../redux/addno/action';

class Button extends React.Component {
  render() {
    return (
      <div >
        <button
          type = 'button'
          onClick = { this.props.onIncrement }
        >
          +
        </button>
        <button
          type = 'button'
          onClick = { this.props.onDecrement }
        >
          -
        </button>
        <button
          type = 'button'
          onClick = { this.props.onMultiple }
        >
          *
        </button>
        <button
          type = 'button'
          onClick = { this.props.onDivision }
        >
          /
        </button>
        <button
          type = 'button'
          onClick = { this.props.onZeroDiff }
        >
          0
        </button>
      </div>
    );
  }
}

let mapDispatchToProps = (dispatch) => {
  return {
    onIncrement: () => dispatch(increment()),
    onDecrement: () => dispatch(decrement()),
    onMultiple: () => dispatch(multiple()),
    onDivision: () => dispatch(division()),
    onZeroDiff: () => dispatch(zeroDiff())
  };
};

export default connect(undefined, mapDispatchToProps)(Button);
