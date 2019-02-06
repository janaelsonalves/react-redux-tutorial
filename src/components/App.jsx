import React, { Component } from "react";
import ArticleList from "./articleList";

class App extends Component {
  state = {};
  render() {
    return (
      <div className="row mt-5">
        <div className="col-md-4 offset-md-1">
          <h2>Articles</h2>
          <ArticleList />
        </div>
      </div>
    );
  }
}

export default App;
