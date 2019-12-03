import React, { Component } from 'react';
import Thread from './Thread/Thread'
import 'react-bootstrap';
//import firebase from 'firebase/app';
//import 'firebase/database';
//import './Forum.css';
import './Styles/Forum.css'
import config from './firebase-config'
//var firebase = require('firebase');
//import * as firebase from 'firebase';
import {connect} from 'react-redux';
import { Field, reduxForm, reset } from 'redux-form';
import _ from 'lodash';
import {getPosts, savePost, deletePost} from './Actions/PostActions';

// class Forum extends Component {
//     constructor(props) {
//         super(props);

//         var firebaseConfig = config

//         this.app = firebase.initializeApp(config);
//         this.database = this.app.database();
//     }
//     render() {
//         return (
//             <Thread database={this.database} />
//         )
//     }
// }


class Forum extends Component {
    componentWillMount() {
        this.props.getPosts();
    }

    renderField(field) {
        return (
            <input type="text" placeholder={`Enter a ${field.label}...`} {...field.input} className={field.class}/>
        );
    }

    onSubmit(values) {
        this.props.savePost(values).then(this.props.dispatch(reset('NewPost')));
    }

    renderPosts() {
        return _.map(this.props.posts, (post, key) => {
            return (
                <div className="card post" key={key}>
                    <div className="card-block">
                    <h3 className="card-title">
                        {post.title}
                    </h3>
                    <p className="card-text">
                        {post.body}
                    </p>
                        <button className="btn btn-danger float-right" onClick={() => this.props.deletePost(key)}>Delete</button>
                    </div>
                </div>
            );
        });
    }

    render() {
        const {handleSubmit} = this.props;
        return (
            <div className="container">
                <div className="main">
                    {this.renderPosts()}
                </div>
                <div className="navbar fixed-bottom">
                    <form onSubmit={handleSubmit(this.onSubmit.bind(this))}>
                        <Field
                            name="title"
                            component={this.renderField}
                            label="Title"
                            class="footer-title"
                        />
                        <Field
                            name="body"
                            component={this.renderField}
                            label="Body"
                            class="footer-body"
                        />
                        <button type="submit" className="btn footer-button">Post</button>
                    </form>
                </div>
            </div>
        )
    }
}


let form = reduxForm({
    form: 'NewPost'
})(Forum);

form = connect(state => ({
    posts: state.posts
}), {getPosts, savePost, deletePost})(form);

export default form;