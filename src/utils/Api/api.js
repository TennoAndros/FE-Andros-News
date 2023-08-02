import axios from "axios";

const newsApi = axios.create({
  baseURL: "https://androsnews.onrender.com/api",
});

export const getArticleById = async (articleId) => {
  const {
    data: { article },
  } = await newsApi.get(`/articles/${articleId}`);
  return article;
};

export const getArticles = async (sortBy, order, topic, limit = 0, p) => {
  const {
    data: { articles, total_count },
  } = await newsApi.get(`/articles`, {
    params: { sort_by: sortBy, order, topic, limit, p },
  });
  return [articles, total_count];
};

export const patchVotesByArticleById = async (articleId, votesObj) => {
  const {
    data: { article },
  } = await newsApi.patch(`/articles/${articleId}`, votesObj);
  return article;
};

export const postArticle = async (newArticleObj) => {
  const {
    data: { article },
  } = await newsApi.post(`/articles`, newArticleObj);
  return article;
};

export const deleteArticleById = async (articleId) => {
  const response = await newsApi.delete(`/articles/${articleId}`);
  return response.data.article;
};

export const getCommentsByArticleId = async (articleId, limit, p) => {
  const {
    data: { comments, total_count },
  } = await newsApi.get(`/articles/${articleId}/comments`, {
    params: { limit, p },
  });
  return [comments, total_count];
};

export const postCommentByArticleId = async (articleId, newCommentObj) => {
  const {
    data: { newComment },
  } = await newsApi.post(`/articles/${articleId}/comments`, newCommentObj);
  return newComment;
};

export const patchVotesCommentById = async (commentId, votesObj) => {
  const {
    data: { comment },
  } = await newsApi.patch(`/comments/${commentId}`, votesObj);
  return comment;
};

export const deleteCommentById = async (commentId) => {
  const response = await newsApi.delete(`/comments/${commentId}`);
  return response.data.comment;
};

export const getTopics = async () => {
  const {
    data: { topics },
  } = await newsApi.get("/topics");
  return topics;
};

export const postTopic = async (newTopicObj) => {
  const {
    data: { topic },
  } = await newsApi.post(`/topics`, newTopicObj);
  return topic;
};

export const getUsers = async () => {
  const {
    data: { users },
  } = await newsApi.get("/users");
  return users;
};

export const postUser = async (newUserObj) => {
  const {
    data: { user },
  } = await newsApi.post(`/users`, newUserObj);
  return user;
};
