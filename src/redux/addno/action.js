export const INCREMENT = 'INCREMENT';
export const DECREMENT = 'DECREMENT';
export const MULTIPLE = 'MULTIPLE';
export const DIVISION = 'DIVISION';
export const SET_DIFF = 'SET_DIFF';
export const ZERO_DIFF = 'ZERO_DIFF';

export function increment() {
  return {
    type: INCREMENT
  };
}

export function decrement() {
  return {
    type: DECREMENT
  };
}

export function multiple() {
  return {
    type: MULTIPLE
  };
}

export function division() {
  return {
    type: DIVISION
  };
}

export function setDiff(value) {
  return {
    type: SET_DIFF,
    diff: value
  };
}

export function zeroDiff() {
  return {
    type: ZERO_DIFF,
    value: 0
  };
}
