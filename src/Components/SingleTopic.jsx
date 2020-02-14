import React, { Component } from "react";
import * as api from "../utils/api";
import ErrorHandler from "./ErrorHandler";
import Loader from "./Loader";
import ArticleVoter from "./ArticleVoter";
import { Link } from "@reach/router";

class SingleTopic extends Component {
  state = { articles: [], isLoading: true, err: null };

  singleTopicInvoker = () => {
    api
      .fetchArticlesForTopic(this.props.slug, this.props.article_id)
      .then(({ articles }) => {
        this.setState({ articles: articles, isLoading: false });
      })
      .catch(err => {
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

  componentDidMount() {
    this.singleTopicInvoker();
  }

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
            <section key={article.article_id}>
              <h3>
                <Link to={`/articles/${article.article_id}`}>
                  {article.title}
                </Link>
              </h3>
              <p>Article_id:{article.article_id}</p>
              <p>{article.body}</p>
              <p>Votes: {article.votes}</p>
              <p>Number of comments on article: {article.comment_count}</p>
              <p>Topic: {article.topic}</p>
              <ArticleVoter
                article_id={article.article_id}
                votes={article.votes}
              />
            </section>
          );
        })}
      </div>
    );
  }
}

export default SingleTopic;
