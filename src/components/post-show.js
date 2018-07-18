import React from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import { fetchPost, deletePost } from '../actions';

class PostShow extends React.Component {
  componentDidMount = () => {
    const { id } = this.props.match.params;
    this.props.fetchPost(id);
  }

  onDeleteClick = async () => {
    const { id } = this.props.match.params;
    // Not sure if it's the best way to use await here.. But it avoid tiny UI "incoherence"
    const { payload: {request: {status}}} = await this.props.deletePost(id);

    if (status === 200) {
      this.props.history.push('/');
    }
  }

  render = () => {
    const { post } = this.props;

    if (!post) {
      return (
        <div>Loading...</div>
      );
    }

    return (
      <div>
        <Link to="/">Back to home</Link>
        <button className="btn btn-danger pull-right" onClick={this.onDeleteClick}>
          Delete post
        </button>
        <h3>{post.title}</h3>
        <h6>{post.categories}</h6>
        <p>{post.content}</p>
      </div>
    );
  }
}

function mapStateToProps({ posts }, ownProps) {
  return {
    post: posts[ownProps.match.params.id],
  }
}

export default connect(mapStateToProps, { fetchPost, deletePost })(PostShow);
