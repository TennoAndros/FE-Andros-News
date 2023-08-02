import { useState, useEffect } from "react";
import Author from "../Author";
import CommentList from "../Comments/CommentList";
import { useParams } from "react-router-dom";
import { getArticleById, getUsers } from "../../utils/Api/api";
import Error from "../Error";
import Loading from "../Loading";
import DeleteArticle from "./DeleteArticle";
import ArticleVoting from "./ArticleVoting";

const ArticleItem = ({ loggedInUser }) => {
  const { article_id } = useParams();
  const [article, setArticle] = useState({});
  const [users, setUsers] = useState([]);
  const [error, setError] = useState("");

  const [isLoading, setIsLoading] = useState(true);

  const fetchData = async () => {
    try {
      setIsLoading(true);
      const [articleData, usersData] = await Promise.all([
        getArticleById(article_id),
        getUsers(),
      ]);
      setArticle(articleData);
      setUsers(usersData);
      setIsLoading(false);
    } catch (err) {
      setError(err);
      setIsLoading(false);
    }
  };

  useEffect(() => {
    fetchData();
  }, [article_id]);

  const userArr = users.find((user) => user.username === article.author);

  if (error) return <Error err={error} />;

  if (isLoading) return <Loading />;

  return (
    <section className="container mx-auto md:px-2 py-16 w-1/2">
      <div className="flex justify-center">
        <Author author={article.author} userImg={userArr.avatar_url} />
      </div>
      <div className="=article py-10 text-center">
        <h1 className="font-bold text-4xl text-[#0096c7] pb-5">
          {article.title}
        </h1>
        <div className="flex py-10 justify-center">
          <img
            width={900}
            height={600}
            src={article.article_img_url}
            alt="Article Image"
          />
        </div>
        <div className="content text-[#48cae4] text-lg flex flex-col gap-4">
          {article.body}
        </div>
        {!loggedInUser && (
          <div className="text-[#0096c7] text-lg mt-10">
            Votes: <b className="text-[#f48c06]">{article.votes}</b>
          </div>
        )}
        {loggedInUser && article.author !== loggedInUser && (
          <ArticleVoting article={article} />
        )}
        {loggedInUser && article.author === loggedInUser && (
          <div className="flex justify-between mt-10 mx-5">
            <div className="flex flex-row text-[#0096c7]">
              Votes: <b className="text-[#f48c06]">{article.votes}</b>
            </div>
            <DeleteArticle articleId={article_id} className="flex flex-row" />
          </div>
        )}
      </div>
      <CommentList articleId={article_id} loggedInUser={loggedInUser} />
    </section>
  );
};

export default ArticleItem;
