const axios = require("axios");

exports.fetchAllArticles = sort_by => {
  return axios
    .get("https://keir-back-end-nc-news.herokuapp.com/api/articles", {
      params: { sort_by }
    })
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

exports.patchArticleVotes = (article_id, inc_votes) => {
  return axios.patch(
    `https://keir-back-end-nc-news.herokuapp.com/api/articles/${article_id}`,
    { inc_votes }
  );
};

exports.patchCommentsVotes = (comment_id, inc_votes) => {
  return axios
    .patch(
      `https://keir-back-end-nc-news.herokuapp.com/api/comments/${comment_id}`,
      { inc_votes }
    )
    .then(() => {});
};

exports.postCommentToArticle = (comment, article_id) => {
  console.log(comment, "------");
  return axios
    .post(
      `https://keir-back-end-nc-news.herokuapp.com/api/articles/${article_id}/comments`,
      comment
    )
    .then(({ data }) => {
      return data;
    });
};

exports.deleteCommentForArticle = comment_id => {
  return axios
    .delete(
      `https://keir-back-end-nc-news.herokuapp.com/api/comments/${comment_id}`
    )
    .then(console.log("deleted"));
};
