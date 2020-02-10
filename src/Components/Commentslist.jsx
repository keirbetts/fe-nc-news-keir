import React, { Component } from "react";
import * as api from "./api";

class Commentslist extends Component {
  state = { comments: [] };

  commentInvoker() {
    api.fetchCommentsForArticle(this.props.article_id).then(({ comments }) => {
      this.setState({ comments: comments }, () => {
        console.log(comments, "COMMENTS");
      });
    });
  }

  componentDidMount() {
    this.commentInvoker();
  }

  render() {
    return (
      <div>
        {this.state.comments.map(comment => {
          return (
            <section id={comment.comment_id} key={comment.comment_id}>
              <h4>{comment.author} commented:</h4>
              <p>{comment.body}</p>
              <p>Article_id: {comment.article_id}</p>
              <p>Votes: {comment.votes}</p>
              <p>comment posted at: {comment.created_at}</p>
            </section>
          );
        })}
      </div>
    );
  }
}

export default Commentslist;
