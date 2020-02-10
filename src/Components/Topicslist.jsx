import React, { Component } from "react";
import * as api from "./api";

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
    console.log(this.state.topics);

    return (
      <div>
        {this.state.topics.map(topic => {
          return (
            <section key={topic.slug}>
              <h3>{topic.slug}</h3>
            </section>
          );
        })}
      </div>
    );
  }
}

export default Topicslist;
