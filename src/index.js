import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import './i18n';

import App from './routes/App';
import store from './store/index';

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('root')
);
