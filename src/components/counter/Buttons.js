import React from 'react';
import {connect} from 'react-redux';
import {increment, decrement} from '../../redux/addno/action';

class Button extends React.Component {
  render() {
    return (
      <div>
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
      </div>
    );
  }
}

let mapDispatchToProps = (dispatch) => {
  return {
    onIncrement: () => dispatch(increment()),
    onDecrement: () => dispatch(decrement())
  };
};

Button = connect(undefined, mapDispatchToProps)(Button);

export default Button;
