import React from 'react';
import { Link } from 'react-router';

require('../../stylesheets/components/todo/todo.scss');

export default class TodoList extends React.Component {
  render() {
    return (
      <div id = 'todolist' className = 'box-sizing shadow'>
        <h1 className = 'inline-block'>개발 이야기</h1>
        <div>
          <div id = 'todolist__txt' className = 'box-sizing shadow'>
            <ul>
              <li>
                <div>
                  <div><Link to = '/javaScript'>자바스크립트</Link></div>
                </div>
              </li>
              <li>
                <div>
                  <div><Link to = '/react'>리액트</Link></div>
                </div>
              </li>
              <li>
                <div>
                  <div><Link to = '/node'>노드</Link></div>
                </div>
              </li>
              <li>
                <div>
                  <div><Link to = '/redux'>리덕스</Link></div>
                </div>
              </li>
            </ul>
          </div>
        </div>
      </div>
    );
  }
}
