import TopicCard from "./TopicCard";
import { useState, useEffect } from "react";
import { getArticles } from "../../utils/Api/api";
import Error from "../Error";

const TopicsList = ({ users }) => {
  const [articles, setArticles] = useState([]);
  const [error, setError] = useState("");

  const fetchArticles = async () => {
    try {
      const data = await getArticles("created_at", "desc", "", 0);
      setArticles(data[0]);
    } catch (err) {
      setError(err);
    }
  };

  useEffect(() => {
    fetchArticles();
  }, []);

  if (error) return <Error err={error} />;

  return (
    <section className="container mx-auto md:px-20 py-12 ">
      <h1 className="block font-bold text-4xl pb-2 text-center text-[#0096c7]">
        TOPICS
      </h1>
      <div className="grid lg:grid-cols-2">
        <div className="item ">
          <h1 className="font-bold text-3xl py-12 text-center text-[#0096c7]">
            Discover
          </h1>
          <div className="flex flex-col gap-6">
            {articles.slice(5, 8).map((article) => {
              const userArr = users.find(
                (user) => user.username === article.author
              );
              return (
                <TopicCard
                  key={article.article_id}
                  article={article}
                  userImg={userArr.avatar_url}
                />
              );
            })}
          </div>
        </div>
        <div className="item">
          <h1 className="font-bold text-3xl py-12 text-center text-[#0096c7]">
            Recent
          </h1>
          <div className="flex flex-col gap-6">
            {articles.slice(0, 3).map((article) => {
              const userArr = users.find(
                (user) => user.username === article.author
              );
              return (
                <TopicCard
                  key={article.article_id}
                  article={article}
                  userImg={userArr.avatar_url}
                />
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
};

export default TopicsList;
