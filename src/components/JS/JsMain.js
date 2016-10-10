import React from 'react';
import {Link} from 'react-router';
import firebase from 'firebase';
import moment from 'moment';

require('../../stylesheets/components/JS/JsMain.scss');

class JsMain extends React.Component {

  constructor(props) {
    super(props);

    this.state = {
      list: []
    };
  }

  componentDidMount() {
    var jsData = firebase.database().ref('Board/javaScript');
    jsData.on('value', snapshot => {
      this.setState({list: snapshot.val()});
    });
  }

  render() {
    return (
      <div id = 'JsMain' className = 'shadow'>
        <h1>JavaScript 공부</h1>
        { Object.keys(this.state.list).slice().map( (key, index) => {
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

export default JsMain;
