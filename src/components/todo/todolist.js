import React from 'react';

require('../../stylesheets/components/todo/todo.scss');

export default class TodoList extends React.Component {
  render() {
    return (
      <div id = 'todolist' className = 'box-sizing shadow'>
        <h1 className = 'inline-block'>Todo List</h1>
        <div>
          <div id = 'todolist__txt' className = 'box-sizing shadow'>
            <h2>메롱</h2>
            <ul>
              <li>
                <div>
                  <div>SH's</div>
                  <div>poor</div>
                </div>
              </li>
              <li>
                <div>asdf</div>
              </li>
            </ul>
          </div>
        </div>
      </div>
    );
  }
}
