import React, { Component, PropTypes } from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import Counter from '../components/Counter';
import TextInput from '../components/TextInput';
import Header from '../components/Header';

import * as HashRouter from '../router/hashRouter'

function mapStateToProps(state) {
  return {
    counter: state.counter,
    textInput: state.textInput,
    routeState: state.routeState
  };
}

HashRouter.initializeRouter();

HashRouter.registerRoute({
  routeState: 'home',
  routeHash: '',
  content: <div>This is the home page</div>
});

HashRouter.registerRoute({
  routeState: 'counter',
  routeHash: 'counter',
  component: Counter
});

HashRouter.registerRoute({
  routeState: 'textInput',
  routeHash: 'textInput',
  component: TextInput
});

class App extends Component {

  constructor(props) {
    super(props);
  }

  render() {
    const { dispatch, textInput, counter, routeState } = this.props;

    HashRouter.changeHash(routeState);

    console.log('App render: routeState: ', routeState);

    return (
      <div>
        <Header {...this.props} />
        <div className={'content'}>
          {HashRouter.routeStateContent(routeState, this.props)}
        </div>
      </div>
    );
  }

}

App.propTypes = {
  counter: PropTypes.number.isRequired,
  textInput: PropTypes.string.isRequired,
  dispatch: PropTypes.func.isRequired
};


export default connect(mapStateToProps)(App);
