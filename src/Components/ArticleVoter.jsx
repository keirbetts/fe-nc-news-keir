import React, { Component } from "react";
import * as api from "./api";
import ErrorHandler from "./ErrorHandler";

class Voters extends Component {
  state = {
    optimisticVotes: 0
  };

  handleClick = vote => {
    api
      .patchArticleVotes(this.props.article_id, vote)
      .then(() => {
        this.setState(currentState => {
          return {
            optimisticVotes: currentState.optimisticVotes + vote
          };
        });
      })
      .catch(err => {
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

export default Voters;
