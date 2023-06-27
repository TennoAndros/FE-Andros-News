import { useState, useEffect } from "react";
import ArticleList from "../components/Articles/ArticlesList";
import { getArticles } from "./api/api";
import Error from "../components/Error";
import TrendingArticlesList from "../components/Articles/TrendingArticlesList";
import PopularArticlesList from "../components/Articles/PopularArticlesList";

const Index = () => {
  const [articles, setArticles] = useState([[]]);
  const [error, setError] = useState("");
  const fetchArticles = async () => {
    try {
      const data = await getArticles();
      setArticles(data);
    } catch (err) {
      setError(err);
    }
  };
  useEffect(() => {
    fetchArticles();
  }, []);
  if (error) return <Error err={error} />;
  return (
    <div>
      <TrendingArticlesList articles={articles[0]} />
      <ArticleList articles={articles[0].slice(0, 9)} />
      <PopularArticlesList articles={articles[0]} />
    </div>
  );
};

export default Index;

//"home" "/"
//article trending
//article list <ArticlesList limit={9}
//popular articles
//topics
//newsletter
