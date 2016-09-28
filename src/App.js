import React from 'react';
import { State, Navigation, Link } from 'react-router';
import { browserHistory } from 'react-router';

import Counter from './components/counter/Counter';
import Button from './components/counter/Buttons';
import Option from './components/counter/Option';
import TodoList from './components/todo/todolist';

require('./stylesheets/common.scss');

export default class App extends React.Component {
  render() {
    return (
      <div id = 'App-container' style={{textAlign: 'center'}}>
        <Counter />
        <Button />
        <Option />
        <TodoList />
        {this.props.children}
      </div>
    );
  }
}
