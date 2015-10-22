import React, { Component, PropTypes } from 'react';
import * as CounterActions from '../actions/counter';

class Counter extends Component {
  render() {
    const { dispatch, counter } = this.props;
    return (
      <p>
        Clicked: {counter} times
        {' '}
        <button onClick={() => dispatch(CounterActions.increment())}>+</button>
        {' '}
        <button onClick={() => dispatch(CounterActions.decrement())}>-</button>
        {' '}
        <button onClick={() => dispatch(CounterActions.incrementIfOdd())}>Increment if odd</button>
        {' '}
        <button onClick={() => dispatch(CounterActions.incrementAsync())}>Increment async</button>
      </p>
    );
  }
}

Counter.propTypes = {
  dispatch: PropTypes.func.isRequired,
  counter: PropTypes.number.isRequired
};

export default Counter;
