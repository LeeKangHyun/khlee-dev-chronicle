import React from 'react';
import {Link} from 'react-router';
import firebase from 'firebase';
import moment from 'moment';

require('../../stylesheets/components/Node/NodeMain.scss');

export default class NodeMain extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      list: []
    };
  }

  componentDidMount() {
    var jsData = firebase.database().ref('Board/node');
    jsData.on('value', snapshot => {
      this.setState({list: snapshot.val()});
    });
  }

  render() {
    var data = this.state.list;

    return (
      <div id = 'NodeMain' className = 'shadow'>
        <h1>Node.js 공부</h1>
        { data && Object.keys(data).map( (key, index) => {
          let item = this.state.list[key];
          return (
            <div className = 'content-list' key = { key }>
              <div>{ index+1 }</div>
              <div>{ item.title }</div>
              <div>{ moment(item.date).format('MM-DD') }</div>
            </div>
          );
        }) }
        { this.props.children }
      </div>
    );
  }
}
