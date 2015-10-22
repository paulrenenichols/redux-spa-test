import React, { Component, PropTypes } from 'react';
import * as HeaderActions from '../actions/header';

class header extends Component {

  constructor(props) {
    super(props);
  }

  makeClickHandler(nextPage) {
    const { dispatch } = this.props;
    return function(event) {
      console.log('nextPage: ' + nextPage);
      dispatch(HeaderActions.pageChange(nextPage));
    }
  }


  render() {
    const { dispatch, activePage } = this.props;
    return (
        <div className={'nav'}>
          <ul>
            <li  className={(activePage === 'home') ? 'active' : ''}       ><a onClick={this.makeClickHandler('home')}>Home</a></li>
            <li  className={(activePage === 'counter') ? 'active' : ''}    ><a onClick={this.makeClickHandler('counter')}>Counter</a></li>
            <li  className={(activePage === 'textInput') ? 'active' : ''}  ><a onClick={this.makeClickHandler('textInput')}>Text Input</a></li>
          </ul>
        </div>
    );
  }
}

header.propTypes = {
  dispatch: PropTypes.func.isRequired,
  activePage: PropTypes.string.isRequired
};

export default header;
