import React from 'react';

require('../../stylesheets/components/todo/todo.scss');

export default class TodoList extends React.Component {
  render() {
    return (
      <div id = 'todolist' className = 'box-sizing shadow'>
        <h1 className = 'inline-block'>해야 할 일</h1>
        <div>
          <div id = 'todolist__txt' className = 'box-sizing shadow'>
            <text>강현이의 좀 더 쉬운 개발을 위한 사이트</text>
            <h2>개발중...</h2>
          </div>
        </div>
      </div>
    );
  }
}
