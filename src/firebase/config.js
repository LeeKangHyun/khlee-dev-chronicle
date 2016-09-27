import firebase from 'firebase';

export default function(store) {
  var config = {
    apiKey: 'AIzaSyCBdGwmYk4yCeRjds9TkgVKRmFx50metzk',
    authDomain: 'khlee-dev-chronicle.firebaseapp.com',
    databaseURL: 'https://khlee-dev-chronicle.firebaseio.com',
    storageBucket: 'khlee-dev-chronicle.appspot.com'
  };
  firebase.initializeApp(config);
}
