/*Message Board created following tutorial & code provided by Taylor Ray Howard
https://www.youtube.com/playlist?list=PLfU58NU1ve6qwKQd7AGLZsDZ_H0DPqNx8
https://github.com/TaylorRayHoward/ReactReduxMessageBoard*/


import React, { Component } from 'react';
import { connect } from 'react-redux';
import { getPosts, savePost, deletePost } from '../Actions/PostActions';
import { Field, reduxForm, reset } from 'redux-form';
import '../Styles/Forum.css';
import _ from 'lodash';
import PostCard from '../Components/PostCard'
import { getUser, logout } from '../Actions/UserActions';

class Forum extends Component {
  componentWillMount() {
    this.props.getPosts();
    this.props.getUser();
    if (this.props.user.loading === false && this.props.user.email === undefined) {
      this.props.history.replace('/Forum/Login');
    }
  }

  componentWillReceiveProps(nextProps) {
    if (nextProps.user.loading === false && nextProps.user.email === undefined) {
      this.props.history.replace('/Forum/Login');
    }
  }

  renderPosts() {
    return _.map(this.props.posts, (post, key) => {
      return (
        <PostCard key={key}>
          <h3 className="card-title">
            {post.title}
          </h3>
          <p className="card-text">
            {post.body}
          </p>
          <button className="btn btn-danger float-right" onClick={() => this.props.deletePost(key)}>Delete</button>
        </PostCard>
      );
    });
  }

  renderField(field) {
    return (
      <input placeholder={`Enter a ${field.label}...`} {...field.input} className={field.class}/>
    );
  }
  onSubmit(values) {
    this.props.savePost(values).then(this.props.dispatch(reset('NewPost')));
  }

  render() {
    const { handleSubmit } = this.props;
    return (
      <div>
        
        <button className="btn-block btn-danger" onClick={() => {this.props.logout();}}>Sign out</button>

        <div className="container">
          <div className="main">
            {this.renderPosts()}
          </div>
          <div className="fixed-bottom">
            <form onSubmit={handleSubmit(this.onSubmit.bind(this))} className="footerForm">
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
      </div>
    );
  }
}

let form = reduxForm({
  form: 'NewPost'
})(Forum);

form = connect((state, ownProps) => ({
    posts: state.posts,
    user: state.user
  }), { savePost, getPosts, deletePost, getUser, logout }
)(form);

export default form;
