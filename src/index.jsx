import { useState, useEffect } from "react";
import ArticleList from "./components/Articles/ArticlesList";
import { getArticles, getUsers } from "./utils/Api/api";
import Error from "./components/Error";
import PopularArticlesList from "./components/Articles/PopularArticlesList";
import TopicsList from "./components/Topics/TopicsList";
import Loading from "./components/Loading";

const Index = () => {
  const [users, setUsers] = useState([]);
  const [articles, setArticles] = useState([]);
  const [error, setError] = useState("");
  const [isLoading, setIsLoading] = useState(true);

  const fetchData = async () => {
    try {
      setIsLoading(true);
      const [articlesData, usersData] = await Promise.all([
        getArticles("title", "desc", "", 9),
        getUsers(),
      ]);
      setArticles(articlesData);
      setUsers(usersData);
      setIsLoading(false);
    } catch (err) {
      setError(err);
    }
  };

  useEffect(() => {
    fetchData();
  }, []);

  if (error) return <Error err={error} />;

  if (isLoading) return <Loading />;

  return (
    <div>
      <PopularArticlesList />
      <ArticleList articles={articles[0]} users={users} />
      <TopicsList users={users} />
    </div>
  );
};

export default Index;
