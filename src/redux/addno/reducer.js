import { INCREMENT, DECREMENT, SET_DIFF } from './action';

const counterInitialState = {
  value: 0,
  diff: 1
};

export const counter = (state = counterInitialState, action) => {
  switch(action.type) {
  case INCREMENT:
    return Object.assign({}, state, {
      value: state.value + state.diff
    });
  case DECREMENT:
    return Object.assign({}, state, {
      value: state.value - state.diff
    });
  case SET_DIFF:
    return Object.assign({}, state, {
      diff: action.diff
    });
  default:
    return state;
  }
};

export const extra = (state = {value: 'this_is_extra_reducer'}, action) => {
  switch(action.type) {
  default:
    return state;
  }
};