import React, { Component } from "react";
import * as api from "./api";
import ErrorHandler from "./ErrorHandler";

class CommentAdder extends Component {
  state = { body: "", author: "jessjelly", err: false };

  handleChange = (inputValue, key) => {
    this.setState({ [key]: inputValue });
  };

  handleSubmit = event => {
    event.preventDefault();
    api
      .postCommentToArticle(
        { ...this.state },
        this.props.article_id,
        this.state.user
      )
      .then(newComment => {
        this.props.addComment(newComment.comment);
      })
      .catch(err => {
        this.setState({ err: true });
      });
  };

  //HANDLE ERRORS

  render() {
    if (this.state.err) return <ErrorHandler />;
    return (
      <div>
        <form onSubmit={this.handleSubmit}>
          <label>
            Add Comment Here:
            <input
              className="commentInput"
              onChange={event => {
                this.handleChange(event.target.value, "body");
              }}
              type="text"
              id="body"
              required
            ></input>
            <button className="button">Add Comment</button>
          </label>
        </form>
      </div>
    );
  }
}

export default CommentAdder;
