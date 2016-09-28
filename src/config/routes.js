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

module.exports =
  <Route path='/' component={App}>
    <Route path='javaScript' component={JsMain} />
    <Route path='react' component={ReactMain} />
    <Route path='node' component={NodeMain} />
    <Route path='redux' component={ReduxMain} />
  </Route>
;
