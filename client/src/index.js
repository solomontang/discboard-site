import React from 'react';
import ReactDOM from 'react-dom';
// import './index.css';
import 'semantic-ui-css/semantic.min.css';


import { Provider } from 'react-redux';
import { createStore, applyMiddleware, compose, combineReducers } from 'redux';
import thunk from 'redux-thunk';
import { Router } from 'react-router-dom';
import { ConnectedRouter, routerMiddleware, push } from 'react-router-redux'
import { createBrowserHistory } from 'history';

import App from './App';
import registerServiceWorker from './registerServiceWorker';
import rootReducer from './reducers';

//redux devtools extension
const history = createBrowserHistory();
const reduxHistory = routerMiddleware(history);

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
const enhancer = composeEnhancers(
  applyMiddleware(thunk, reduxHistory)
);

const initialState = {
  user: window.__PRELOADED_STATE__.user,
  guilds: window.__PRELOADED_STATE__.guilds
}

delete window.__PRELOADED_STATE__;

const store = createStore(rootReducer, initialState, enhancer);


ReactDOM.render(
  <Provider store={store}>
    <ConnectedRouter history={history}>
      <App />
    </ConnectedRouter>
  </Provider>
  , document.getElementById('root'));
registerServiceWorker();
