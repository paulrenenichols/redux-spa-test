import React, { Component, PropTypes } from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import Counter from '../components/Counter';
import TextInput from '../components/TextInput';
import Header from '../components/Header';

function mapStateToProps(state) {
  return {
    counter: state.counter,
    textInput: state.textInput,
    activePage: state.activePage
  };
}


class App extends Component {

  render() {
    const { dispatch, textInput, counter, activePage } = this.props;

    console.log('App render: activePage: ', activePage);

    var content;

    switch (activePage) {
      case 'home':
        content = <div>This is the home page</div>;
        break;
      case 'counter':
        content = <Counter counter={counter} dispatch={dispatch} />;
        break;
      case 'textInput':
        content = <TextInput textInput={textInput} dispatch={dispatch} />;
        break;
      default:
        content = <div>Default, oops!</div>;
        break;
    }

    return (
      <div>
        <Header activePage={activePage} dispatch={dispatch} />
        <div className={'content'}>
          {content}
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
