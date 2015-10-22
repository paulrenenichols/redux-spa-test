import { combineReducers } from 'redux';
import counter from './counter';
import textInput from './textInput';
import activePage from './header';

const rootReducer = combineReducers({
  counter,
  textInput,
  activePage
});

function loggingReducer(state, action) {
  console.log('logging action: ' + JSON.stringify(action));
  return rootReducer(state, action);
}

export default loggingReducer;
