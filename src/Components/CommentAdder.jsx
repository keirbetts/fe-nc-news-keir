import React, { Component } from "react";
import * as api from "./api";

class CommentAdder extends Component {
  state = { body: "", author: "jessjelly" };

  handleChange = (inputValue, key) => {
    this.setState({ [key]: inputValue });
  };

  handleSubmit = event => {
    event.preventDefault();
    api
      .postCommentToArticle({ ...this.state }, this.props.article_id)
      .then(newComment => {
        this.props.addComment(newComment.comment);
      });
  };

  render() {
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
