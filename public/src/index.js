import React from 'react';
import {render} from 'react-dom';
import {createStore, applyMiddleware} from 'redux';
import {Provider} from 'react-redux';
import trunkMiddleware from 'redux-thunk';
import createLogger from 'redux-logger';
import {Router, Route, IndexRoute, browserHistory} from 'react-router'
import "react-progress-2/main.css"
import App from './components/App';
import rootReducer from './reducers';
import LoginForm from './containers/LoginForm';
import DataList from './components/DataList';
import Card from './components/Card';

const store = createStore(
    rootReducer,
    applyMiddleware(trunkMiddleware, createLogger())
);

const requireAuth = (nextState, replace)=> {
  if(!store.getState()) {
    replace({
      path: '/login'
    });
  };


};

render(
    <Provider store={store}>
      <Router history={browserHistory}>
        <Route path="/" component={App}>
          <IndexRoute component={LoginForm}/>
          <Route path="/login" component={LoginForm}/>
          <Route path="/data" component={DataList}/>
          <Route path="/card/:id" component={Card} onEnter={requireAuth}/>
        </Route>
      </Router>
    </Provider>,
    document.getElementById('app')
);