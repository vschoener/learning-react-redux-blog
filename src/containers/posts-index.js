import React from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';

import { fetchPosts } from '../actions';

class PostIndex extends React.Component {

  componentDidMount = () => {
    this.props.fetchPosts();
  }

  renderPostsList = () => {

    // Translate the object back to array as we don't need the key
    const posts = Object.values(this.props.posts);

    if (!posts.length) {
      return (<li>Loading...</li>);
    }

    return posts.map(post => {
      return (
        <li key={post.id} className="list-group-item">
          <div>
            <Link to={`/posts/${post.id}`}>{post.title}</Link>
          </div>
        </li>
      );
    });
  }

  render = () => {
    return (
      <div>
        <div className="text-xs-right">
          <Link className="btn btn-primary" to="/posts/new">Add post</Link>
        </div>
        <h3>Posts</h3>
        <ul className="list-group">
          {this.renderPostsList()}
        </ul>
      </div>
    );
  }
}

function mapStateToProps(state) {
  return {
    posts: state.posts,
  }
}

export default connect(mapStateToProps, { fetchPosts })(PostIndex);
