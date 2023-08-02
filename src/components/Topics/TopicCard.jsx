import Author from "../Author";
import { Link } from "react-router-dom";

const TopicCard = ({ article, userImg }) => {
  const dateString = article.created_at;
  const dateTime = new Date(dateString);
  const formattedDate = dateTime.toLocaleDateString("en-GB");

  return (
    <div className="flex gap-5">
      <div className="image flex justify-start">
        <img
          src={article.article_img_url}
          alt="Image"
          className="w-[250px] h-[200px] rounded"
        />
      </div>
      <div className="info flex flex-col justify-center">
        <div className="category">
          <span className="text-[#ffaa00]">
            {article.topic}
          </span>
          <span className="text-[#48cae4]">-{formattedDate}</span>
        </div>
        <div className="title flex flex-col justify-start">
          <Link
            to={`articles/${article.article_id}`}
            className="text-xl font-bold text-[#0096c7] hover:text-[#48cae4] truncate max-w-[250px]"
          >
            {article.title}
          </Link>
        </div>
        <Author author={article.author} userImg={userImg} />
      </div>
    </div>
  );
};

export default TopicCard;
