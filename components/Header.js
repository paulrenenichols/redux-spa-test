import React, { Component, PropTypes } from 'react';
import * as RouteActions from '../actions/routeState';

class header extends Component {

  constructor(props) {
    super(props);
  }

  makeClickHandler(routeState) {
    const { dispatch } = this.props;
    return function(event) {
      console.log('routeState: ' + routeState);
      dispatch(RouteActions.routeState(routeState));
    }
  }


  render() {
    const { dispatch, routeState } = this.props;
    return (
        <div className={'nav'}>
          <ul>
            <li  className={(routeState === 'home') ? 'active' : ''}       ><a onClick={this.makeClickHandler('home')}>Home</a></li>
            <li  className={(routeState === 'counter') ? 'active' : ''}    ><a onClick={this.makeClickHandler('counter')}>Counter</a></li>
            <li  className={(routeState === 'textInput') ? 'active' : ''}  ><a onClick={this.makeClickHandler('textInput')}>Text Input</a></li>
          </ul>
        </div>
    );
  }
}

header.propTypes = {
  dispatch: PropTypes.func.isRequired,
  routeState: PropTypes.string.isRequired
};

export default header;
