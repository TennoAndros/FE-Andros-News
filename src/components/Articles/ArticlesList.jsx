import ArticleCard from "./ArticleCard";
import { Link } from "react-router-dom";


const ArticleList = ({ articles,users }) => {
  

  return (
    <section className="container mx-auto md:px-20 py-10">
      <Link to="/articles">
        <h1 className="font-bold text-4xl py-12 text-center text-[#0096c7] hover:text-[#48cae4] cursor-pointer">
          Articles
        </h1>
      </Link>
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
    </section>
  );
};

export default ArticleList;
