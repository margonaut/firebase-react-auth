import React from 'react';
import ReactDOM from 'react-dom';
import * as firebase from 'firebase';
import { firebaseConfig } from './firebaseConfig';
import App from './components/App';
import './index.css';

var config = {
     apiKey: firebaseConfig.apiKey,
     authDomain: firebaseConfig.authDomain,
     databaseURL: firebaseConfig.databaseURL
   };

firebase.initializeApp(config)

ReactDOM.render(
  <App />,
  document.getElementById('root')
);
