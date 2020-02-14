import React, { Component } from "react";
import * as api from "../utils/api";
import ErrorHandler from "./ErrorHandler";

class CommentVoter extends Component {
  state = {
    optimisticVotes: 0
  };

  handleClick = vote => {
    this.setState(currentState => {
      return {
        optimisticVotes: currentState.optimisticVotes + vote
      };
    });

    api.patchCommentsVotes(this.props.comment_id, vote).catch(err => {
      alert("Voting is Down");
      this.setState(currentState => {
        return { optimisticVotes: currentState.optimisticVotes - vote };
      });
    });
  };

  render() {
    if (this.state.err) return <ErrorHandler />;
    return (
      <div>
        <p>Likes: {this.props.votes + this.state.optimisticVotes}</p>
        <button
          className="commentLikeButton"
          onClick={() => {
            this.handleClick(1);
          }}
          disabled={this.state.optimisticVotes > 0}
        >
          Like Comment
        </button>
        <button
          className="commentDislikeButton"
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
