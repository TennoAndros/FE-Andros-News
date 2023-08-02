import Author from "../Author";
import { Link } from "react-router-dom";

const PopularArticleCard = ({ article, userImg }) => {
  const dateString = article.created_at;
  const dateTime = new Date(dateString);
  const formattedDate = dateTime.toLocaleDateString("en-GB");
  return (
    <div className="grid md:grid-cols-2">
      <div className="image">
        <img
          src={article.article_img_url}
          alt="Image"
          className="w-[600px] h-[600px] rounded"
        />
      </div>
      <div className="info flex justify-center flex-col">
        <div className="category">
          <span className="text-[#ffaa00] ">{article.topic}</span>
          <span className="text-[#48cae4]">-{formattedDate}</span>
        </div>
        <div className="title ">
          <Link
            to={`articles/${article.article_id}`}
            className="text-3xl md:text-4xl font-bold text-[#0096c7] hover:text-[#48cae4]"
          >
            {article.title}
          </Link>
        </div>
        <p className="text-[#00b4d8] py-4">{article.body}</p>
        <Author author={article.author} userImg={userImg} />
      </div>
    </div>
  );
};
export default PopularArticleCard;
