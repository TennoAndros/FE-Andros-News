import Author from "../Author";

const PopularArticleCard = ({ article }) => {
  const dateString = article.created_at;
  const dateTime = new Date(dateString);
  const formattedDate = dateTime.toLocaleDateString("en-GB");
  return (
    <div className="grid">
      <div className="images">
        <img
          src={article.article_img_url}
          alt="Image"
          className="w-[670px] h-[400px] rounded"
        />
      </div>
      <div className="info flex justify-center flex-col py-4 truncate">
        <div className="category">
          <a className="text-orange-600 hover:text-orange-800 " href="">
            {article.topic}
          </a>
          <a className="text-gray-800 hover:text-gray-600" href="">
            -{formattedDate}
          </a>
        </div>
        <div className="title truncate">
          <a
            href=""
            className="text-3xl md:text-4xl font-bold text-gray-800 hover:text-blue-600"
          >
            {article.title}
          </a>
        </div>
        <p className="text-gray-500 py-4 truncate">{article.body}</p>
        <Author article={article.author} />
      </div>
    </div>
  );
};
export default PopularArticleCard;
