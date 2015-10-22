import React from 'react';
import { render } from 'react-dom';
import { Provider } from 'react-redux';
import App from './containers/App';
import configureStore from './store/configureStore';

import './main.less';

const store = configureStore();

store.subscribe(function () {
  console.log('Store State Updated');
  console.log(JSON.stringify(store.getState(), null, 2));
});

render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('root')
);
