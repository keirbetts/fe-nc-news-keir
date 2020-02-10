import React from "react";
import "./App.css";
import { Router } from "@reach/router";
import Title from "./Components/Title";
import Articleslist from "./Components/Articleslist";
import Navbar from "./Components/Navbar";
import Topicslist from "./Components/Topicslist";
import SingleArticle from "./Components/SingleArticle";
import SingleTopic from "./Components/SingleTopic";
import Commentslist from "./Components/Commentslist";

//Set a state for user

function App() {
  return (
    <div className="App">
      <Title />
      <Navbar />
      <Router>
        <Articleslist path="/articles" />
        <SingleArticle path="/articles/:article_id" />
        <Topicslist path="/topics" />
        <SingleTopic path="/topics/:slug" />
        <Commentslist path="/articles/:article_id/comments" />
      </Router>
    </div>
  );
}

export default App;
