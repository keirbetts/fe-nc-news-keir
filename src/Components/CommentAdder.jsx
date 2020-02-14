import React, { Component } from "react";
import * as api from "../utils/api";
import ErrorHandler from "./ErrorHandler";

class CommentAdder extends Component {
  state = { body: "" };

  handleChange = (inputValue, key) => {
    this.setState({ [key]: inputValue });
  };

  handleSubmit = event => {
    if (this.props.user) {
      event.preventDefault();
      this.setState({ body: "" });
      api
        .postCommentToArticle(
          { ...this.state, username: this.props.user },
          this.props.article_id
        )
        .then(newComment => {
          this.props.addComment(newComment.comment);
        })
        .catch(err => {
          this.setState({ err: true });
        });
    } else {
      alert("You must be logged in to post a comment!");
    }
  };

  render() {
    if (this.state.err) return <ErrorHandler />;
    return (
      <div>
        <form onSubmit={this.handleSubmit}>
          <label>
            Comment Here:
            <input
              className="commentInput"
              onChange={event => {
                this.handleChange(event.target.value, "body");
              }}
              type="text"
              id="body"
              value={this.state.body}
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
