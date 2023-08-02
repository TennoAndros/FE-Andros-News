import Author from "../Author";
import { Link } from "react-router-dom";

const ArticleCard = ({ article,userImg }) => {
  const dateString = article.created_at;
  const dateTime = new Date(dateString);
  const formattedDate = dateTime.toLocaleDateString("en-GB");

  return (
    <div className="items truncate">
      <div className="image">
        <img
          src={article.article_img_url}
          alt="Image"
          className="w-[500px] h-[350px] rounded"
        />
      </div>
      <div className="info flex justify-center flex-col py-4">
        <div className="category h-7">
          <span className="text-[#ffaa00]">
            {article.topic}
          </span>
          <span className="text-[#48cae4]">-{formattedDate}</span>
        </div>
        <Link
          to={`/articles/${article.article_id}`}
          className="title truncate text-xl font-bold text-[#0096c7] hover:text-[#48cae4] cursor-pointer"
        >
          {article.title}
        </Link>
        <p className="text-[#00b4d8] py-4 truncate">{article.body}</p>
        <Author author={article.author} userImg={userImg}/>
      </div>
    </div>
  );
};
export default ArticleCard;
