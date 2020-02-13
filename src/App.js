import React, { Component } from "react";
import "./App.css";
import { Router } from "@reach/router";
import Title from "./Components/Title";
import Articleslist from "./Components/Articleslist";
import Navbar from "./Components/Navbar";
import Topicslist from "./Components/Topicslist";
import SingleArticle from "./Components/SingleArticle";
import SingleTopic from "./Components/SingleTopic";
import Commentslist from "./Components/Commentslist";
import ErrorHandler from "./Components/ErrorHandler";

class App extends Component {
  state = {
    user: "jessjelly"
  };
  render() {
    return (
      <div className="App">
        <Title />
        Logged in as: {this.state.user}
        <Navbar />
        <Router>
          <Articleslist path="/articles" />
          <SingleArticle path="/articles/:article_id" />
          <Topicslist path="/topics" />
          <SingleTopic path="/topics/:slug" />
          <Commentslist
            path="/articles/:article_id/comments"
            user={this.state.user}
          />
          <ErrorHandler default />
        </Router>
      </div>
    );
  }
}

export default App;
