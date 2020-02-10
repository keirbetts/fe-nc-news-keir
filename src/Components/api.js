const axios = require("axios");

exports.fetchAllArticles = () => {
  return axios
    .get("https://keir-back-end-nc-news.herokuapp.com/api/articles")
    .then(({ data }) => {
      return data;
    });
};

exports.fetchSingleArticle = article_id => {
  return axios
    .get(
      `https://keir-back-end-nc-news.herokuapp.com/api/articles/${article_id}`
    )
    .then(({ data }) => {
      return data;
    });
};

exports.fetchAllTopics = () => {
  return axios
    .get("https://keir-back-end-nc-news.herokuapp.com/api/topics")
    .then(({ data }) => {
      return data;
    });
};

exports.fetchArticlesForTopic = slug => {
  return axios
    .get(
      `https://keir-back-end-nc-news.herokuapp.com/api/articles?topic=${slug}`
    )
    .then(({ data }) => {
      return data;
    });
};

exports.fetchCommentsForArticle = article_id => {
  return axios
    .get(
      `https://keir-back-end-nc-news.herokuapp.com/api/articles/${article_id}/comments`
    )
    .then(({ data }) => {
      return data;
    });
};
