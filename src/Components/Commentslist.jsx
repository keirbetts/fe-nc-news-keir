import React, { Component } from "react";
import * as api from "../utils/api";
import CommentVoter from "./CommentVoter";
import CommentAdder from "./CommentAdder";
import Loader from "./Loader";
import ErrorHandler from "./ErrorHandler";

class Commentslist extends Component {
  state = { comments: [], isLoading: true, err: false };

  commentInvoker() {
    api
      .fetchCommentsForArticle(this.props.article_id)
      .then(({ comments }) => {
        this.setState({ comments: comments, isLoading: false }, () => {});
      })
      .catch(err => {
        this.setState({ err, isLoading: false });
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
    //SORT OUT LOGIN FUNCTIONALITY
    if (this.props.user === "jessjelly") {
      const commentId = event.target.parentElement.id;
      api
        .deleteCommentForArticle(commentId)
        .then(() => {
          this.setState(currentState => {
            const filteredComments = currentState.comments.filter(comment => {
              return comment.comment_id !== +commentId;
            });
            return { comments: filteredComments };
          });
        })
        .catch(err => {
          alert(
            "Unable to delete at the current time! Try refreshing the page"
          );
          this.setState({ err });
        });
    } else {
      alert("You must be logged in to delete a comment!");
    }
  };

  render() {
    if (this.state.isLoading) return <Loader />;
    if (this.state.err) return <ErrorHandler err={this.state.err} />;
    return (
      <div>
        <CommentAdder
          comments={this.state.comments}
          addComment={this.addComment}
          article_id={this.props.article_id}
          user={this.props.user}
        />
        {this.state.comments.map(comment => {
          return (
            <section id={comment.comment_id} key={comment.comment_id}>
              <h4>{comment.author} commented:</h4>
              <p>{comment.body}</p>

              <p>Article_id: {comment.article_id}</p>
              <p>Votes: {comment.votes}</p>
              <p>comment posted at: {comment.created_at}</p>
              <p>Comment_id: {comment.comment_id}</p>
              <CommentVoter
                className="votes"
                comment_id={comment.comment_id}
                votes={comment.votes}
              />
              <button className="deleteButton" onClick={this.handleDelete}>
                Delete Comment
              </button>
            </section>
          );
        })}
      </div>
    );
  }
}

export default Commentslist;
