import React, { Component } from "react";
import * as api from "./api";
import { Link } from "@reach/router";

class Topicslist extends Component {
  state = { topics: [] };

  topicsInvoker = () => {
    api.fetchAllTopics().then(({ topics }) => {
      this.setState({ topics: topics });
    });
  };

  componentDidMount = () => {
    this.topicsInvoker();
  };

  render() {
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
