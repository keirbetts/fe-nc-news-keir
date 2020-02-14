import React, { Component } from "react";
import * as api from "../utils/api";
import ErrorHandler from "./ErrorHandler";

class ArticleVoter extends Component {
  state = {
    optimisticVotes: 0
  };

  handleClick = vote => {
    this.setState(currentState => {
      return {
        optimisticVotes: currentState.optimisticVotes + vote
      };
    });
    api.patchArticleVotes(this.props.article_id, vote).catch(err => {
      alert("Voting is Down");
      this.setState(currentState => {
        return {
          optimisticVotes: currentState.optimisticVotes - vote
        };
      });
    });
  };

  render() {
    if (this.state.err) return <ErrorHandler />;
    return (
      <div>
        <p>Votes: {this.props.votes + this.state.optimisticVotes}</p>
        <button
          onClick={clickEvent => {
            this.handleClick(1);
          }}
          disabled={this.state.optimisticVotes > 0}
        >
          Like Article
        </button>
        <button
          onClick={clickEvent => {
            this.handleClick(-1);
          }}
          disabled={this.state.optimisticVotes < 0}
        >
          Dislike Article
        </button>
      </div>
    );
  }
}

export default ArticleVoter;
