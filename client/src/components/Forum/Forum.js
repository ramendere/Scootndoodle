import React, { Component } from 'react';
import Thread from './Thread/Thread'
import 'react-bootstrap';
//import firebase from 'firebase/app';
//import 'firebase/database';
import './Forum.css';
import config from './firebase-config'
var firebase = require('firebase');
//import * as firebase from 'firebase';

class Forum extends Component {
    constructor(props) {
        super(props);

        var firebaseConfig = config

        this.app = firebase.initializeApp(config);
        this.database = this.app.database();
    }
    render() {
        return (
            <Thread database={this.database} />
        )
    }
}

export default Forum;