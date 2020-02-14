import React, { Component } from "react";
import * as api from "../utils/api";
import { Link } from "@reach/router";
import Loader from "./Loader";
import ErrorHandler from "./ErrorHandler";
import ArticleVoter from "./ArticleVoter";

class SingleArticle extends Component {
  state = {
    article: [],
    isLoading: true,
    err: null
  };

  singleArticleInvoker = () => {
    api
      .fetchSingleArticle(this.props.article_id)
      .then(({ article }) => {
        this.setState({ article: article, isLoading: false }, () => {});
      })
      .catch(err => {
        this.setState({ err, isLoading: false });
      });
  };

  componentDidMount = () => {
    this.singleArticleInvoker();
  };

  render() {
    if (this.state.isLoading) return <Loader />;
    if (this.state.err) return <ErrorHandler err={this.state.err} />;
    const { title, body, votes, topic, article_id } = this.state.article;
    return (
      <div id={article_id}>
        <h3>{title}</h3>
        <p>{body}</p>

        <p>Topic: {topic}</p>
        <p>
          <Link to={`/articles/${article_id}/comments`}>Comments</Link>
        </p>
        <ArticleVoter article_id={article_id} votes={votes} />
      </div>
    );
  }
}

export default SingleArticle;
