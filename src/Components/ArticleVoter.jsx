import React, { Component } from "react";
import * as api from "./api";

class Voters extends Component {
  state = {
    optimisticVotes: 0
    // isLoading: true
  };

  handleClick = vote => {
    api.patchArticleVotes(this.props.article_id, vote);
    this.setState(currentState => {
      return {
        optimisticVotes: currentState.optimisticVotes + vote
      };
    });
  };

  render() {
    return (
      <div>
        <p>Likes: {this.props.votes + this.state.optimisticVotes}</p>
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
