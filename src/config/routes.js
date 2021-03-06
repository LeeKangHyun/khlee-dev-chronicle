import React from 'react';
import { Route, IndexRoute, browserHistory } from 'react-router';
import { connect } from 'react-redux';

// 기본 페이지
import App from '../App';

// 자바스크립트
import JsMain from '../components/JS/JsMain';

// 리액트
import ReactMain from '../components/React/ReactMain';

// 노드
import NodeMain from '../components/Node/NodeMain';

// 리덕스
import ReduxMain from '../components/Redux/ReduxMain';
import Counter from '../components/counter/Counter';

// 게시물 작성
import Board from '../components/Board/board';

module.exports =
  <Route path='/' component={App}>
    <Route path='/javaScript' component={JsMain}>

    </Route>

    <Route path='/react' component={ReactMain}>

    </Route>

    <Route path='/node' component={NodeMain}>

    </Route>

    <Route path='/redux' component={ReduxMain}>
      <Route path='/counter' component={Counter} />
    </Route>

    <Route path = '/board' component={Board} />
  </Route>
;
