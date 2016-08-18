import React from 'react';
import {render} from 'react-dom';
import {createStore, applyMiddleware} from 'redux';
import {Provider} from 'react-redux';
import {Router, Route, IndexRoute, browserHistory} from 'react-router'
import "react-progress-2/main.css"
import App from './components/App';
import rootReducer from './reducers';
import LoginForm from './components/LoginForm';

const store = createStore(rootReducer);

render(
    <Provider store={store}>
      <Router history={browserHistory}>
        <Route path="/" component={App}>
          <IndexRoute component={LoginForm}/>
          <Route path="login" component={LoginForm}/>
        </Route>
      </Router>
    </Provider>,
    document.getElementById('app')
);