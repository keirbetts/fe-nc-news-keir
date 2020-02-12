import React, { Component } from "react";
import { Link } from "@reach/router";
import * as api from "./api";
import ArticleVoter from "./ArticleVoter";
import Loader from "./Loader";
import ErrorHandler from "./ErrorHandler";

class Articleslist extends Component {
  state = {
    articles: [],
    input: "",
    err: null,
    isLoading: true
  };

  articlesInvoker = () => {
    api
      .fetchAllArticles()
      .then(({ articles }) => {
        this.setState({ articles: articles, isLoading: false });
      })
      .catch(({ err }) => {
        this.setState({ err, isLoading: false });
      });
  };

  handleSubmit = event => {
    event.preventDefault();
    api.fetchAllArticles(this.state.input).then(({ articles }) => {
      this.setState(currentState => {
        return { articles, ...currentState.articles };
      });
    });
  };

  handleClick = ({ target: { id, value } }) => {
    this.setState(currentState => {
      return { currentState, [id]: value };
    });
  };

  componentDidMount = () => {
    this.articlesInvoker();
  };

  render() {
    if (this.state.isLoading) return <Loader />;
    if (this.state.err) return <ErrorHandler />;
    return (
      <div>
        <form onSubmit={this.handleSubmit}>
          <select id="input" className="select" onChange={this.handleClick}>
            <option value="none">Select an Option</option>
            <option value="created_at">Date</option>
            <option value="comment_count">Comment count</option>
            <option value="votes">Votes</option>
          </select>
          <button className="button">Sort By</button>
        </form>
        {this.state.articles.map(article => {
          return (
            <section
              className="articles"
              id={article.article_id}
              key={article.article_id}
            >
              <h3>
                <Link to={`/articles/${article.article_id}`}>
                  {article.title}
                </Link>
              </h3>
              <p>Article_id:{article.article_id}</p>
              <p>{article.body}</p>
              <p>Comments on article: {article.comment_count}</p>
              <p>Topic: {article.topic}</p>
              <p>created at: {article.created_at}</p>
              {
                <ArticleVoter
                  article_id={article.article_id}
                  votes={article.votes}
                />
              }
            </section>
          );
        })}
      </div>
    );
  }
}

export default Articleslist;
