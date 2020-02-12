import React, { Component } from "react";
import * as api from "./api";
import { Link } from "@reach/router";
import Loader from "./Loader";
import ErrorHandler from "./ErrorHandler";

class Topicslist extends Component {
  state = { topics: [], isLoading: true, err: null };

  topicsInvoker = () => {
    api
      .fetchAllTopics()
      .then(({ topics }) => {
        this.setState({ topics: topics, isLoading: false });
      })
      .catch(err => {
        this.setState({ err });
      });
  };

  componentDidMount = () => {
    this.topicsInvoker();
  };

  render() {
    if (this.state.isLoading) return <Loader />;
    if (this.state.err) return <ErrorHandler />;
    return (
      <div>
        {this.state.topics.map(topic => {
          return (
            <section key={topic.slug}>
              <h3>
                <Link to={`/topics/${topic.slug}`}>{topic.slug}</Link>
              </h3>
            </section>
          );
        })}
      </div>
    );
  }
}

export default Topicslist;
