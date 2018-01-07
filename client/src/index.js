import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import registerServiceWorker from './registerServiceWorker';
import { createStore, applyMiddleware } from 'redux';
import { Provider } from 'react-redux';
import thunk from 'redux-thunk';

const store = createStore(
  (state = {}) => state,
  applyMiddleware(thunk)
);

const mainComponent = () => (
    <Provider store={store}>
      <App />
    </Provider>
  );

ReactDOM.render(mainComponent(), document.getElementById('root'));
registerServiceWorker();

