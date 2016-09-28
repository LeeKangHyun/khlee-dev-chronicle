import React from 'react';
import ReactDOM from 'react-dom';
import {Router, Route, IndexRoute, browserHistory} from 'react-router';
import { createStore } from 'redux';
import { Provider } from 'react-redux';
import routes from './config/routes';

import counterApp from './redux/reducers';

const store = createStore(counterApp);

init();

function init() {
  ReactDOM.render(
    <Provider store = {store} >
      <Router onUpdate={() => window.scrollTo(0, 0)} history={browserHistory}>
        {routes}
      </Router>
    </Provider>,
    document.getElementById('app')
  );
}
