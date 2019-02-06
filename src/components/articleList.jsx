import React from "react";
import { connect } from "react-redux";

const mapStateToProps = state => {
  return { articles: state.articles };
};

const ConnectedList = ({ articles }) => (
  <ul className="list-group list-group-flush">
    {articles.map(article => (
      <li className="list-group-item" key={article.id}>
        {article.title}
      </li>
    ))}
  </ul>
);

const ArticleList = connect(mapStateToProps)(ConnectedList);

export default ArticleList;
