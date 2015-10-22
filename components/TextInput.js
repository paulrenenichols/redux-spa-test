import React, { Component, PropTypes } from 'react';
import * as TextActions from '../actions/textInput';

class TextInput extends Component {

  constructor(props) {
    super(props);
  }

  handleChange(event) {
    this.props.dispatch(TextActions.updateText(event.target.value));
  }


  render() {
    return (
        <input type="text" value={this.props.textInput} onChange={this.handleChange.bind(this)} ></input>
    );
  }
}

TextInput.propTypes = {
  textInput: PropTypes.string.isRequired,
  dispatch: PropTypes.func.isRequired
};

export default TextInput;
