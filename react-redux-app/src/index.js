import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';

import { applyMiddleware, createStore, compose } from 'redux';
import { Provider } from 'react-redux';

import thunk from 'redux-thunk'

import { launchReducer } from './reducers';

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const store = createStore(launchReducer, composeEnhancers(applyMiddleware(thunk)));

const rootElement = document.getElementById('root');
ReactDOM.render(
    <Provider store={store}>
    <App />
  </Provider>
  , rootElement
);
