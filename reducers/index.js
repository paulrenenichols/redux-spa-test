import { combineReducers } from 'redux';
import counter from './counter';
import textInput from './textInput';
import routeState from './routeState';

const rootReducer = combineReducers({
  counter,
  textInput,
  routeState
});

function loggingReducer(state, action) {
  console.log('logging action: ' + JSON.stringify(action));
  return rootReducer(state, action);
}

export default loggingReducer;
