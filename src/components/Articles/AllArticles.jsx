//options from backend like sort by order klp
import { getArticles, getTopics, getUsers } from "../../utils/Api/api";
import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import Error from "../Error";
import ArticleCard from "./ArticleCard";
import "../../index.css";
import Loading from "../Loading";

const AllArticles = () => {
  const [articles, setArticles] = useState([]);
  const [allTopics, setAllTopics] = useState([]);
  const [users, setUsers] = useState([]);
  const [sortBy, setSortBy] = useState("title");
  const [order, setOrder] = useState("asc");
  const [queryTopic, setQueryTopic] = useState("");
  const [limit, setLimit] = useState(15);
  const [error, setError] = useState("");
  const [totalCount, setTotalCount] = useState(0);
  const [isLoading, setIsLoading] = useState(true);

  const fetchData = async () => {
    try {
      const [articlesData, topicsData, usersData] = await Promise.all([
        getArticles(sortBy, order, queryTopic, limit),
        getTopics(),
        getUsers(),
      ]);
      setArticles(articlesData[0]);
      setTotalCount(articlesData[1]);
      setAllTopics(topicsData);
      setUsers(usersData);
    } catch (err) {
      setError(err);
    }
  };

  useEffect(() => {
    fetchData();
    setIsLoading(false)
  }, [sortBy, order, queryTopic, limit]);

  if (error) return <Error err={error} />;

  if (isLoading) return <Loading />;

  const loadMoreArticles = () => {
    setLimit((curLimit) => curLimit + 6);
  };

  return (
    <section className="container mx-auto md:px-20 py-10">
      <h1 className="font-bold text-4xl py-12 text-center text-[#0096c7] hover:text-[#48cae4] cursor-pointer">
        All Articles
      </h1>
      <div className="text-[#ffaa00] mb-4">Total Articles: {totalCount}</div>
      <div className="flex mb-6 items-center">
        <label className=" text-lg font-medium text-[#0096c7]">Sort By:</label>
        <select
          className="ml-2 bg-[#f48c06] border border-[#f48c06] text-white text-sm rounded-lg  focus:ring-[#0096c7] focus:ring-1 focus:border-[#0096c7] w-sm p-1"
          onChange={(event) => {
            setSortBy(event.target.value);
          }}
        >
          <option default value="title">Title</option>
          <option value="topic">Topic</option>
          <option value="author">Author</option>
          <option value="created_at">Date</option>
          <option value="votes">Votes</option>
          <option value="comment_count">Comments</option>

        </select>
        <label className=" text-lg ml-4 font-medium text-[#0096c7]">
          Order By:
        </label>
        <select
          className="ml-2 bg-[#f48c06] border border-[#f48c06] text-white text-sm rounded-lg  focus:ring-[#0096c7] focus:ring-1 focus:border-[#0096c7] w-sm p-1"
          onChange={(event) => {
            setOrder(event.target.value);
          }}
        >
          <option default value="asc">Ascending</option>
          <option value="desc">Descending</option>
        </select>
        <label className=" text-lg ml-4 font-medium text-[#0096c7]">
          Choose Topic:
        </label>
        <select
          className="ml-2 bg-[#f48c06] border border-[#f48c06] text-white text-sm rounded-lg  focus:ring-[#0096c7] focus:ring-1 focus:border-[#0096c7] w-sm p-1"
          onChange={(event) => {
            setQueryTopic(event.target.value);
          }}
        >
          <option default value="">All</option>
          {allTopics.map((topic) => (
            <option key={topic.slug} value={topic.slug}>
              {topic.slug}
            </option>
          ))}
        </select>
        <div className="flex-grow flex flex-row justify-end">
          <Link to="/post">
            <button className="items-end bg-[#f48c06] hover:bg-[#ffaa00] text-white font-bold py-2 px-4 rounded-md whitespace-nowrap">
              Post New Article
            </button>
          </Link>
        </div>
      </div>
      {/* grid columns */}
      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-14">
        {" "}
        {articles.map((article) => {
          const userArr = users.find(
            (user) => user.username === article.author
          );
          return (
            <ArticleCard
              key={article.article_id}
              article={article}
              userImg={userArr.avatar_url}
            />
          );
        })}
      </div>
      <div className="flex justify-center mt-10">
        <button
          className="bg-[#f48c06] hover:bg-[#ffaa00] text-white px-4 py-2 rounded disabled:opacity-50 disabled:cursor-not-allowed"
          onClick={loadMoreArticles}
          disabled={totalCount === articles.length}
        >
          View More
        </button>
      </div>
    </section>
  );
};

export default AllArticles;
