import React from 'react';

import TodoList from './components/todo/todolist';
require('./stylesheets/common.scss');

export default class App extends React.Component {
  render() {
    return (
      <div id = 'App-container'>
        <TodoList />
      </div>
    );
  }
}
