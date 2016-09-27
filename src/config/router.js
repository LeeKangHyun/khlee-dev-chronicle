import React from 'react';
import { Route, IndexRoute, browserHistory } from 'react-router';
import { connect } from 'react-redux';

import App from '../App';
import TodoList from '../components/todo/todolist';

module.exports =
  <Route path='/' component={App}>
    <IndexRoute component={TodoList} />
  </Route>
;
