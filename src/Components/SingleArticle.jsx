import React, { Component } from "react";
import * as api from "./api";
import { Link } from "@reach/router";

class SingleArticle extends Component {
  state = {
    article: []
  };

  singleArticleInvoker = () => {
    api.fetchSingleArticle(this.props.article_id).then(({ article }) => {
      this.setState({ article: article }, () => {});
    });
  };

  componentDidMount = () => {
    this.singleArticleInvoker();
  };

  render() {
    const { title, body, votes, topic, article_id } = this.state.article;
    return (
      <div id={article_id}>
        <h3>{title}</h3>
        <p>{body}</p>
        <p>Votes: {votes}</p>
        <p>Topic: {topic}</p>
        <p>
          <Link to={`/articles/${article_id}/comments`}>Comments</Link>
        </p>
      </div>
    );
  }
}

export default SingleArticle;
