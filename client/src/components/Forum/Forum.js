import React, { Component } from 'react';
import Thread from './Thread/Thread'
import 'react-bootstrap';
//import firebase from 'firebase/app';
//import 'firebase/database';
import './Forum.css';
var firebase = require('firebase');
//import * as firebase from 'firebase';


class Forum extends Component {
    constructor(props) {
        super(props);

        var firebaseConfig = {
            apiKey: "AIzaSyCJ2s8l0-E5QDJ-PEGTEga7rlfYPAN7SpY",
            authDomain: "dextedoodleforum.firebaseapp.com",
            databaseURL: "https://dextedoodleforum.firebaseio.com",
            projectId: "dextedoodleforum",
            storageBucket: "dextedoodleforum.appspot.com",
            messagingSenderId: "541907899808",
            appId: "1:541907899808:web:6d5700019c884ff425c0c5",
            measurementId: "G-VMLLEEJ19S"
        };

        this.app = firebase.initializeApp(firebaseConfig);
        this.database = this.app.database();
    }
    render() {
        return (
            <Thread database={this.database} />
        )
    }
}

export default Forum;