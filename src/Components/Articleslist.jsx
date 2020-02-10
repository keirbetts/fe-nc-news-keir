import React, { Component } from "react";
import { Link } from "@reach/router";
import * as api from "./api";

class Articleslist extends Component {
  state = {
    articles: []
  };

  articlesInvoker = () => {
    api.fetchAllArticles().then(({ articles }) => {
      this.setState({ articles: articles }, () => {});
    });
  };

  componentDidMount = () => {
    this.articlesInvoker();
  };

  render() {
    return (
      <div>
        {this.state.articles.map(article => {
          return (
            <section id={article.article_id} key={article.article_id}>
              <h3>
                <Link to={`/articles/${article.article_id}`}>
                  {article.title}
                </Link>
              </h3>
              <p>Article_id:{article.article_id}</p>
              <p>{article.body}</p>
              <p>Votes: {article.votes}</p>
              <p>Comments on article: {article.comment_count}</p>
              <p>Topic: {article.topic}</p>
              <p>created at: {article.created_at}</p>
            </section>
          );
        })}
      </div>
    );
  }
}

export default Articleslist;
