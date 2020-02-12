import React, { Component } from "react";
import * as api from "./api";
import CommentVoter from "./CommentVoter";
import CommentAdder from "./CommentAdder";

class Commentslist extends Component {
  state = { comments: [] };

  commentInvoker() {
    api.fetchCommentsForArticle(this.props.article_id).then(({ comments }) => {
      this.setState({ comments: comments }, () => {});
    });
  }

  componentDidMount() {
    this.commentInvoker();
  }

  addComment = newComment => {
    this.setState(currentState => {
      return { comments: [newComment, ...currentState.comments] };
    });
  };

  handleDelete = event => {
    const commentId = event.target.parentElement.id;
    api.deleteCommentForArticle(commentId).then(() => {
      this.setState(currentState => {
        return { comments: [...currentState.comments] };
      });
    });
  };

  render() {
    return (
      <div>
        <CommentAdder
          comments={this.state.comments}
          addComment={this.addComment}
          article_id={this.props.article_id}
        />
        {this.state.comments.map(comment => {
          return (
            <section id={comment.comment_id} key={comment.comment_id}>
              <h4>{comment.author} commented:</h4>
              <p>{comment.body}</p>

              <CommentVoter
                comment_id={comment.comment_id}
                votes={comment.votes}
              />

              <p>Article_id: {comment.article_id}</p>
              <p>Votes: {comment.votes}</p>
              <p>comment posted at: {comment.created_at}</p>
              <p>Comment_id: {comment.comment_id}</p>
              <button onClick={this.handleDelete}>Delete Comment</button>
            </section>
          );
        })}
      </div>
    );
  }
}

export default Commentslist;
