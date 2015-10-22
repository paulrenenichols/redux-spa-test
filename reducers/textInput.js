import { UPDATE_TEXT } from '../actions/textInput';

export default function textInput(state = "", action) {
  switch (action.type) {
    case UPDATE_TEXT:
      return action.textInput;
    default:
      return state;
  }
}
