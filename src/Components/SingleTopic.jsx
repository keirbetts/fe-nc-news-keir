import React, { Component } from "react";
import * as api from "./api";
import ErrorHandler from "./ErrorHandler";
import Loader from "./Loader";

class SingleTopic extends Component {
  state = { articles: [], isLoading: true };

  singleTopicInvoker = () => {
    api.fetchArticlesForTopic(this.props.slug).then(({ articles }) => {
      this.setState({ articles: articles, isLoading: false }, () => {});
    });
  };

  componentDidMount() {
    this.singleTopicInvoker();
  }

  render() {
    if (this.state.isLoading) return <Loader />;
    return (
      <div>
        {this.state.articles.map(article => {
          return (
            <section key={article.article_id}>
              <h3>{article.title}</h3>
              <p>Article_id:{article.article_id}</p>
              <p>{article.body}</p>
              <p>Votes: {article.votes}</p>
              <p>Number of comments on article: {article.comment_count}</p>
              <p>Topic: {article.topic}</p>
            </section>
          );
        })}
      </div>
    );
  }
}

export default SingleTopic;
