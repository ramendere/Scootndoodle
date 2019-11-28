import React from 'react';
import './Post.css'

const Post = (props) => (
    <div className="card post-editor">
        <div className="card-body">
            { 
                props.postBody.map((postPart, idx) => (
                    <div key={idx}>{postPart}</div>
                ))
            }
        </div>
    </div>
);

export default Post;