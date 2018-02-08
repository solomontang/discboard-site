import React from 'react';
import ReactDOM from 'react-dom';
// import './index.css';
// import 'semantic-ui-css/semantic.min.css';
import App from './App';
import registerServiceWorker from './registerServiceWorker';

import { Provider } from 'react-redux';
import { createStore, applyMiddleware, compose } from 'redux';
import thunk from 'redux-thunk';
import {
  BrowserRouter as Router
} from 'react-router-dom';

import rootReducer from './reducers';

//redux devtools extension
const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
const enhancer = composeEnhancers(
  applyMiddleware(thunk)
);

const initialState = {
  user: window.__PRELOADED_STATE__.user,
  guilds: window.__PRELOADED_STATE__.guilds
}

delete window.__PRELOADED_STATE__;

const store = createStore(rootReducer, initialState, enhancer);

ReactDOM.render(
  <Provider store={store}>
    <Router>
      <App />
    </Router>
  </Provider>
  , document.getElementById('root'));
registerServiceWorker();
