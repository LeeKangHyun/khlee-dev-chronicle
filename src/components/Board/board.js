import React from 'react';
import { browserHistory } from 'react-router';
import firebase from 'firebase';
import moment from 'moment';

require('../../stylesheets/components/board/Board.scss');

export default class Board extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      tab: 'javaScript'
    };
  }

  tabChange(e) {
    this.setState({
      tab: e.target.value,
    });
  }

  post() {
    firebase.database().ref('Board').child(this.state.tab).push().set({
      title: this.title.value,
      content: this.content.value,
      date: moment().format('YYYYMMDDHHmmss')
    });
    browserHistory.push('/' + this.state.tab);
  }

  componentWillUnmount() {
    this.setState({
      tab: ''
    });
  }

  render() {
    return (
      <div id = 'Board'>
        <h1>게시글 작성</h1>
        <select id = 'Board-select' value = { this.state.tab } onChange = { this.tabChange.bind(this) }>
          <option value = ''>종류</option>
          <option value = 'javaScript'>자바스크립트</option>
          <option value = 'react'>리액트</option>
          <option value = 'node'>노드</option>
          <option value = 'redux'>리덕스</option>
        </select>
        <input
          id = 'Board-input'
          ref = { c => {this.title = c;} }
          type = 'text'
          placeholder = '제목'
        />
        <textarea
          id = 'Board-txt'
          ref = { c => {this.content = c;} }
        />
        <button onClick = { this.post.bind(this) }>전송</button>
      </div>
    );
  }
}
