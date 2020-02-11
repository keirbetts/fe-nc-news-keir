import React, { Component } from "react";
import { Link } from "@reach/router";
import * as api from "./api";
import Voters from "./ArticleVoter";

class Articleslist extends Component {
  state = {
    articles: [],
    input: ""
  };

  articlesInvoker = () => {
    api.fetchAllArticles().then(({ articles }) => {
      this.setState({ articles: articles }, () => {});
    });
  };

  handleClick = clickEvent => {
    let selected = clickEvent.target.value;
    if (selected === "Comment count") this.setState({ input: selected });

    //clickEvent.target.value
    //pass down the sort_by on props
    //spread in the state
  };

  componentDidMount = () => {
    this.articlesInvoker();
  };

  render() {
    return (
      <div>
        Sort By:
        <select className="select" onChange={this.handleClick}>
          <option id="none">Select an Option</option>
          <option id="date created">Date</option>
          <option id="commentCount">Comment count</option>
          <option id="votes">Votes</option>
        </select>
        {this.state.articles.map(article => {
          return (
            <section id={article.article_id} key={article.article_id}>
              {<Voters id={article.article_id} votes={article.votes} />}
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
