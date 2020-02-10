import React from "react";
import "./App.css";
import { Router } from "@reach/router";
import Title from "./Components/Title";
import Articleslist from "./Components/Articleslist";
import Navbar from "./Components/Navbar";
import Topicslist from "./Components/Topicslist";
import SingleArticle from "./Components/SingleArticle";

function App() {
  return (
    <div className="App">
      <Title />
      <Navbar />
      <Router>
        <Articleslist path="/articles" />
        <SingleArticle path="/articles/:article_id" />
        <Topicslist path="/topics" />
      </Router>
    </div>
  );
}

export default App;
