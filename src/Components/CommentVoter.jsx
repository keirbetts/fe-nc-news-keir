import React, { Component } from "react";
import * as api from "./api";

class CommentVoter extends Component {
  state = {
    optimisticVotes: 0,
    isLoading: true
  };

  handleClick = vote => {
    api.patchCommentsVotes(this.props.comment_id, vote);
    this.setState(currentState => {
      return {
        optimisticVotes: currentState.optimisticVotes + vote,
        isLoading: false
      };
    });
  };

  render() {
    return (
      <div>
        <p>Likes: {this.props.votes + this.state.optimisticVotes}</p>
        <button
          onClick={() => {
            this.handleClick(1);
          }}
          disabled={this.state.optimisticVotes > 0}
        >
          Like Comment
        </button>
        <button
          onClick={() => {
            this.handleClick(-1);
          }}
          disabled={this.state.optimisticVotes < 0}
        >
          Dislike Comment
        </button>
      </div>
    );
  }
}

export default CommentVoter;
