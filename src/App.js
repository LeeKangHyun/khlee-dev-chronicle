import React from 'react';
import { State, Navigation, Link } from 'react-router';
import { browserHistory } from 'react-router';

import TodoList from './components/todo/todolist';

require('./stylesheets/common.scss');

export default class App extends React.Component {
  render() {
    return (
      <div id = 'App-container' style={{textAlign: 'center'}}>
        <TodoList />
        {this.props.children}
      </div>
    );
  }
}
