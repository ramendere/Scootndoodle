import React, { Component } from 'react';
import { connect } from 'react-redux';
import PostCard from '../Components/PostCard';
import Link from 'react-router-dom/es/Link';
import { deletePost} from '../Actions/PostActions';
import AddComment from './AddComment';
import Comment from '../Components/Comment';
import SubmitComment from './SubmitComment'
import _ from 'lodash';

class PostDetail extends Component {
  renderComments() {
    return _.map(this.props.post.comments, (comment, key) => {
      return <Comment key={key} body={comment.content} id={key} delete={comment.uid === this.props.user.uid}
                      deleteComment={() => {
                        this.props.deleteComment(this.props.match.params.id, key);
                      }}/>;
    });
  }

  componentWillMount() {
    const { post, history } = this.props;
    if (post === undefined || post === null) {
      history.replace('/');
    }
  }

  render() {
    const { post, match } = this.props;
    return (
      <div>
        <div className="navbar">
          <Link to={'/'} className="btn btn-primary">
            Go home
          </Link>
        </div>
        <div className="container">
          <PostCard>
            <h1 className="post-title">{post.title}</h1>
            <p className="post-body">{post.body}</p>
            <SubmitComment id={match.params.id}/>
          </PostCard>
          {this.renderComments()}
        </div>
      </div>
    );
  }
}

function mapStateToProps(state, ownProps) {
  return { post: state.posts[ownProps.match.params.id], user: state.user, posts: state.posts };
}

export default connect(mapStateToProps, { deletePost})(PostDetail);
